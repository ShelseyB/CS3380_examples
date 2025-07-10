// Immutable task list
const tasks = [
    { id: 1, title: "Finish program", done: false},
    { id: 2, title: "Take midterm", done: false},
    { id: 3, title: "Take quiz", done: true},
];

// Pure functions
const addTask = (taskList, title) => [
    ...taskList,
    { id: Math.floor(Math.random() * 100), title, done: false }
];

const markTaskDone = (taskList, taskId) =>
    taskList.map(task => task.id === taskId ? { ...task, done: true } : task);

const getCompletedTasks = taskList => taskList.filter(task => task.done);

const displayTasks = taskList => 
    taskList.map(task => `${task.done ? "[x]" : "[ ]"} ${task.title}`);

// Program flow
const newTasks1 = addTask(tasks, "Study for final");
const newTasks2 = markTaskDone(newTasks1, 2);
const completed = getCompletedTasks(newTasks2);
const output = displayTasks(completed);

output.forEach(line => console.log(line));


console.log(tasks, newTasks2);