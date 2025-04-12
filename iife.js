/** Immediately Invoked Function Expressions */

(function () {
    console.log("In the IIFE");
})();

const app = (function () {
    const config = {debug: true};
    return {
        start: function() {
            console.log("Starting the app with the following configuration: ", config.debug);
        }
    }
})();

app.start();

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
