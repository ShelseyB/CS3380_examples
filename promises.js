// const promise = new Promise((resolve, reject) => {
//     if (/**successful */ true) {
//         resolve()
//     } else {
//         reject();
//     }
// })

const fetchData = new Promise((resolve, reject) => {
    const data = `{"blah": 1, "boop": 2}`;

    setTimeout(() => {
        // resolve(data);
        reject("I didn't feel like doing this")
    }, 2000);
});
const fetchData2 = new Promise((resolve, reject) => {
    const data = `{"blah": 3, "boop": 4}`;

    setTimeout(() => {
        // if (Math.random() > .5) {
            resolve(data);
        // } else {
        //     reject("I didn't feel like doing this")
        // }
    }, 2000);
});

// fetchData.then(data => {
//     console.log("data", data);
//     return JSON.parse(data)
// }).then(parsed_data => {
//     console.log("parsed data", parsed_data);
// }).catch((reason) => {
//     console.log("reason", reason)
// }).finally(() => {
//     console.log("in finally")
// })

// Promise.all([fetchData, fetchData2]).then(results => {
//     console.log("results", results);
// }).catch(err => console.error(err));

// Promise.race([fetchData, fetchData2]).then(results => {
//     console.log(results);
// }).catch(err => console.error(err));

async function async_func() {
    try {
        const data_from_promise = await fetchData;
        console.log(data_from_promise);
        return fetchData;
    } catch (err) {
        console.log('error in async_func', err);
        throw err;
    }
}

async function async_func2() {
    const awaited_data = await async_func();
    console.log("awaited_data", awaited_data);
}

async_func2()
