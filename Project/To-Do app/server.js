const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'your-super-secret-key-change-this'; // Change this to a long, random string

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

const TASKS_FILE = path.join(__dirname, 'tasks.json');
const USERS_FILE = path.join(__dirname, 'users.json');

// Generic read/write helpers
const readData = (file) => {
    if (!fs.existsSync(file)) return [];
    try {
        const data = fs.readFileSync(file);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const writeData = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// ===== Auth Routes =====

app.post('/api/auth/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const users = readData(USERS_FILE);
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);
    writeData(USERS_FILE, users);

    res.status(201).json({ message: 'User registered successfully.' });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    const users = readData(USERS_FILE);
    const user = users.find(u => u.email === email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
});

// ===== Auth Middleware =====

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
    }
};

// ===== Protected Task API Routes =====

app.get('/api/tasks', authMiddleware, (req, res) => {
    const allTasks = readData(TASKS_FILE);
    const userTasks = allTasks.filter(t => t.userId === req.userId);
    res.json(userTasks);
});

app.post('/api/tasks', authMiddleware, (req, res) => {
    const allTasks = readData(TASKS_FILE);
    const newTask = { ...req.body, userId: req.userId };
    allTasks.unshift(newTask);
    writeData(TASKS_FILE, allTasks);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', authMiddleware, (req, res) => {
    const allTasks = readData(TASKS_FILE);
    const id = parseInt(req.params.id);
    const updatedFields = req.body;
    const index = allTasks.findIndex(t => t.id === id);

    if (index !== -1) {
        // Security check: ensure the task belongs to the logged-in user
        if (allTasks[index].userId !== req.userId) {
            return res.status(403).json({ error: 'Forbidden: You do not own this task.' });
        }
        allTasks[index] = { ...allTasks[index], ...updatedFields };
        writeData(TASKS_FILE, allTasks);
        res.json(allTasks[index]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/api/tasks/:id', authMiddleware, (req, res) => {
    let allTasks = readData(TASKS_FILE);
    const id = parseInt(req.params.id);
    const taskToDelete = allTasks.find(t => t.id === id);

    if (!taskToDelete) {
        return res.status(404).json({ error: 'Task not found' });
    }

    // Security check
    if (taskToDelete.userId !== req.userId) {
        return res.status(403).json({ error: 'Forbidden: You do not own this task.' });
    }

    const newTasks = allTasks.filter(t => t.id !== id);
    writeData(TASKS_FILE, newTasks);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});