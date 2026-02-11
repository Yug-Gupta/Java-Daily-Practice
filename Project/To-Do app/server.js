const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

const DATA_FILE = path.join(__dirname, 'tasks.json');

// Helper to read tasks
const readTasks = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    try {
        const data = fs.readFileSync(DATA_FILE);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Helper to write tasks
const writeTasks = (tasks) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// API Routes
app.get('/api/tasks', (req, res) => {
    res.json(readTasks());
});

app.post('/api/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = req.body;
    tasks.unshift(newTask);
    writeTasks(tasks);
    res.json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        writeTasks(tasks);
        res.json(tasks[index]);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    let tasks = readTasks();
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    writeTasks(tasks);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});