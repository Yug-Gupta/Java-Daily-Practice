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

        // Load from LocalStorage
        onMounted(() => {
            const savedTasks = localStorage.getItem('myTasks');
            if (savedTasks) {
                tasks.value = JSON.parse(savedTasks);
            }
            
            // Check system preference for dark mode
            if (localStorage.getItem('theme') === 'dark' || 
               (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                isDark.value = true;
                document.documentElement.classList.add('dark');
            }
        });

        // Watchers to save state
        watch(tasks, (newVal) => {
            localStorage.setItem('myTasks', JSON.stringify(newVal));
        }, { deep: true });

        // Methods
        const addTask = () => {
            if (newTask.value.trim() === '') return;
            
            tasks.value.unshift({
                id: Date.now(),
                text: newTask.value,
                completed: false,
                createdAt: new Date(),
                dueDate: newTaskDate.value,
                category: newTaskCategory.value,
                priority: newTaskPriority.value,
                isEditing: false
            });
            
            newTask.value = '';
            newTaskDate.value = '';
            newTaskCategory.value = 'Personal';
            newTaskPriority.value = 'Medium';
        };

        const deleteTask = (id) => {
            tasks.value = tasks.value.filter(t => t.id !== id);
        };

        const toggleComplete = (task) => {
            task.completed = !task.completed;
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
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
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

        const saveEdit = (task) => {
            if (task.tempText.trim()) task.text = task.tempText;
            task.isEditing = false;
        };

        const cancelEdit = (task) => {
            task.isEditing = false;
        };

        // Helpers
        const formatDate = (date) => new Date(date).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        const isOverdue = (task) => {
            if (!task.dueDate || task.completed) return false;
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