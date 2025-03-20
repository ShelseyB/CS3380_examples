const CounterModule = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        reset: function() {
            count = 0;
        },
        getCount() {
            return count;
        }
    }
})();

CounterModule.increment();
CounterModule.increment();
console.log(CounterModule.getCount());
CounterModule.decrement();
console.log(CounterModule.getCount());
CounterModule.reset();
console.log(CounterModule.getCount());
