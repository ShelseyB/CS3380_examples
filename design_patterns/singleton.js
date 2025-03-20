const Singleton = (function() {
    let instance;

    function createInstance() {
        return { name: "Singleton"};
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance
        }
    }
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 == singleton2);