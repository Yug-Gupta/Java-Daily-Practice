const { createApp, ref, computed, onMounted, watch } = Vue;

createApp({
    setup() {
        // State
        const tasks = ref([]);
        const newTask = ref('');
        const newTaskDate = ref('');
        const newTaskCategory = ref('Personal');
        const newTaskPriority = ref('Medium');
        const categories = ['Personal', 'Work', 'Shopping', 'Health', 'Other'];
        const priorities = ['Low', 'Medium', 'High'];
        const currentFilter = ref('All');
        const filters = ['All', 'Active', 'Completed'];
        const isDark = ref(false);
        const isListening = ref(false);
        const currentThemeName = ref('cosmic');
        const taskProgress = computed(() => {
            if (tasks.value.length === 0) return 0;
            const completed = tasks.value.filter(t => t.completed).length;
            return (completed / tasks.value.length) * 100;
        });

        // Themes Configuration
        const themes = {
            cosmic: { primary: '#6366f1', secondary: '#a855f7' },
            nature: { primary: '#10b981', secondary: '#34d399' },
            sunset: { primary: '#f43f5e', secondary: '#fbbf24' },
            ocean: { primary: '#0ea5e9', secondary: '#3b82f6' }
        };

        // "AI" Suggestions Database
        const suggestions = [
            "Read 10 pages of a book",
            "Drink 2 liters of water",
            "Organize desktop files",
            "Call a friend or family member",
            "Meditate for 10 minutes",
            "Plan meals for the week",
            "Review monthly budget",
            "Clean the workspace"
        ];

        // Load from Backend/LocalStorage
        onMounted(() => {
            // Fetch from Backend API
            fetch('/api/tasks')
                .then(res => res.json())
                .then(data => tasks.value = data)
                .catch(err => console.error("Error fetching tasks:", err));

            // Load theme
            const savedTheme = localStorage.getItem('appTheme') || 'cosmic';
            setTheme(savedTheme);

            // Check system preference for dark mode
            if (localStorage.getItem('darkMode') === 'true' || 
               (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                isDark.value = true;
                document.documentElement.classList.add('dark');
            }
        });

        // Methods
        const addTask = async () => { // Now with NLP!
            if (newTask.value.trim() === '') return;
            
            let taskText = newTask.value;
            let dueDate = newTaskDate.value;

            const results = chrono.parse(taskText);
            if (results.length > 0 && !newTaskDate.value) {
                const dateResult = results[0].start.date();
                dueDate = new Date(dateResult.valueOf() - (dateResult.getTimezoneOffset() * 60000)).toISOString().slice(0, -8);
                taskText = (taskText.slice(0, results[0].index) + taskText.slice(results[0].index + results[0].text.length)).trim();
            }

            const taskObj = {
                id: Date.now(),
                text: newTask.value,
                completed: false,
                createdAt: new Date(),
                dueDate: newTaskDate.value,
                category: newTaskCategory.value,
                priority: newTaskPriority.value,
                isEditing: false
            };
            
            // Save to Backend
            await fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskObj)
            });

            tasks.value.unshift(taskObj); // Optimistic update
            
            newTask.value = '';
            newTaskDate.value = '';
            newTaskCategory.value = 'Personal';
            newTaskPriority.value = 'Medium';
        };

        const deleteTask = async (id) => {
            await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
            tasks.value = tasks.value.filter(t => t.id !== id);
        };

        const toggleComplete = async (task) => {
            task.completed = !task.completed;
            
            await fetch(`/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: task.completed })
            });

            if (task.completed) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        };

        const toggleDarkMode = () => {
            isDark.value = !isDark.value;
            if (isDark.value) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        };

        const setTheme = (name) => {
            currentThemeName.value = name;
            const theme = themes[currentThemeName.value];
            document.documentElement.style.setProperty('--color-primary', theme.primary);
            document.documentElement.style.setProperty('--color-secondary', theme.secondary);
            localStorage.setItem('appTheme', name);
        };

        const suggestTask = () => {
            const random = suggestions[Math.floor(Math.random() * suggestions.length)];
            newTask.value = random;
        };

        const startVoiceInput = () => {
            if (!('webkitSpeechRecognition' in window)) {
                alert('Voice input is not supported in this browser.');
                return;
            }
            
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'en-US';
            isListening.value = true;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                newTask.value = transcript;
                isListening.value = false;
            };

            recognition.onerror = () => isListening.value = false;
            recognition.onend = () => isListening.value = false;
            
            recognition.start();
        };

        // Edit Functions
        const startEditing = (task) => {
            task.tempText = task.text;
            task.isEditing = true;
        };

        const saveEdit = async (task) => { // Updated to save to backend
            if (task.tempText.trim()) task.text = task.tempText;
            task.isEditing = false;
            
            await fetch(`/api/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: task.text })
            });
        };

        const cancelEdit = (task) => {
            task.isEditing = false;
        };

        // Helpers
        const formatDate = (date) => new Date(date).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        const isOverdue = (task) => {
            if (!task.dueDate) return false;
            return new Date(task.dueDate) < new Date();
        };

        // Computed
        const filteredTasks = computed(() => {
            if (currentFilter.value === 'Active') return tasks.value.filter(t => !t.completed);
            if (currentFilter.value === 'Completed') return tasks.value.filter(t => t.completed);
            return tasks.value;
        });

        return {
            tasks,
            newTask,
            newTaskDate,
            newTaskCategory,
            newTaskPriority,
            categories,
            priorities,
            themes,
            setTheme,
            taskProgress,
            currentFilter,
            filters,
            isDark,
            isListening,
            filteredTasks,
            addTask,
            deleteTask,
            toggleComplete,
            toggleDarkMode,
            suggestTask,
            startVoiceInput,
            startEditing,
            saveEdit,
            cancelEdit,
            formatDate,
            isOverdue
        };
    }
}).mount('#app');