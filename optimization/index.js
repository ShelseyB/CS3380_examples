// Bottlenecks
// 1. Blocking code
const data = fs.readFileSync("random.txt");
console.log("data", data);

// 2. Memory Leaks
const memoryLeak = [];
setInterval(() => {
    memoryLeak.push(new Array(100000000000).fill("something"));
}, 1000);

// 3. Excessive I/O Operations
//      Frequent file/database reading/writing

// 4. Inefficient Algorithms

// Techniques for Optimization
// 1. Optimize Event Loop
    // a. Avoid synchronous operations
const data2 = fs.readFile("random.txt", (data) => {
    console.log("data", data);
});

    // b. Use setImmediate or process.nextTick
// earliest (end of current operation)
process.nextTick(() => {
    console.log("nextTick");
})
// Runs in "check phase", after I/O events
setImmediate(() => {
    console.log("setImmediate");
})
// Runs in the "timers" phase, after a ~1ms delay
setTimeout(() => {
    console.log("timeout")
}, 0);

// 2. Cache data
const cache = {};
function expensiveOperation(key) {
    // some sort of extreme math or database query or file read here
    const val = key;
    return val;
}
function getCachedData(key) {
    if (cache[key]) return cache[key];
    const value = expensiveOperation(key);
    cache[key] = value;
    return value;
}

// 3. Stream data for large files
const readStream = fs.createReadStream("extremelyLargeFile.txt");

readStream.on("data", chunk => {
    console.log("Next chuck:", chunk);
});

// 4. Optimize Database Queries
// - Use indexing and limit query results
const results = await db.collection('users').find({ age: { $gt: 30 } }).limit(10).toArray();

// Tools for performace monitoring
console.time("loop");
for (let i = 0; i < 2000; i++) {

}
console.timeEnd("loop");
