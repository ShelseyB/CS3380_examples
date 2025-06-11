function thatRunsAsync(cb) {
    /*
    Bunch of code that takes a long time to run
    */
   cb();
}

thatRunsAsync(() => console.log("Whew, glad that's over"));

console.log()

const fetchData = new Promise((resolve, reject) => {
    let data = { name: "Bobby", age: 34};

    setTimeout(() => {
        console.log("in timeout");
        let fail = false; // Set to true to test failure
        if (fail) {
            reject("Hey, it failed :(");
        }
        // Simulate success
        resolve(data);
    }, 2000); // Time in milliseconds
});

console.log("After Promise");
console.log(fetchData);

fetchData
    .then(result => result.age)
    .then((result) => console.log("Data received:", result))
    .catch(err => console.error(err))
    .finally(() => console.log("It's over"));

// Handling Multiple Promises
const promise1 = new Promise(resolve => resolve('First promise resolved'));
const promise2 = new Promise(resolve => resolve('Second promise resolved'));

// Get results from all promises
Promise.all([promise1, promise2])
    .then(results => console.log(results))
    .catch(error => console.log(error));

// Only grabs the data from promise that fulfills first
Promise.race([promise1, promise2])
    .then(results => console.log("results in race", results))
    .catch(error => console.log(error));

// Async and await

async function waitForMe() {
    return {a: 1};
}
async function funcThatRunsAsync() {
    try {
        const data = await waitForMe();
        console.log("data in funcThatRunsAsync", data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

funcThatRunsAsync();
funcThatRunsAsync().then(d => console.log("d", d));
