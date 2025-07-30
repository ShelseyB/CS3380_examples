/** Immediately Invoked Function Expressions */

(function () {
    console.log("In the IIFE");
})();

(function (name) {
    console.log("Hello", name);
})("CS 3380")

const app = (function () {
    const config = {debug: true};
    return {
        start: function() {
            console.log("Starting the app with the following configuration: ", config.debug);
        }
    }
})();

app.start();
console.log("config", app.config);

const todoApp = (function() {
    const tasks = [];
    return {
        addTask: function(task) {
            tasks.push(task);
        },
        removeTask: function(index) {
            tasks.splice(index);
        },
        displayTasks: function() {
            console.log("Tasks: ", tasks);
        }
    }
})();

todoApp.addTask("Finish my homework");
todoApp.addTask("Eat dinner");
todoApp.displayTasks();
todoApp.removeTask(1);
todoApp.displayTasks();

console.log(todoApp.tasks);

const mathModule = (function () {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b
    }
})();

console.log(mathModule.add(1, 2), mathModule.subtract(1, 2), mathModule.divide(1, 2))
