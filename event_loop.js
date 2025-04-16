// The following code can be run at the website below to help visualize event loops
// http://latentflip.com/loupe/

// Example 1
console.log("Started");
setTimeout(function timeout() {
    console.log("hi");
}, 1000);

setTimeout(function timeout() {
    console.log("hi");
}, 1000);

setTimeout(function timeout() {
    console.log("hi");
}, 1000);

setTimeout(function timeout() {
    console.log("hi");
}, 1000);

// Example 2 (with simulate renders on)
// Synchronous
[1, 2, 3, 4].forEach(function(i) {
    console.log(i);
    delay();
})

// Asynchronous
function asyncForEach(array, cb) {
    array.forEach(function() {
        setTimeout(cb, 0);
    });
}

asyncForEach([1, 2, 3, 4], function(i) {
    console.log(i);
    delay();
});
