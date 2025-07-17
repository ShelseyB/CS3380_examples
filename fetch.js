const url = "https://meowfacts.herokuapp.com/?count=3";

/**
 * HTTP Methods: 
 * Get
 * Put
 * Post
 * Delete
 */
// fetch(url, {
//     method: "GET",
//     // body: JSON.stringify({ username: "example" }),
//     // headers: {
//     //     "Content-Type": "application/json",
//     //     "Authorization": "Bearer <token>"
//     // }
// })
//     /** other ways to process:
//      * .arrayBuffer()
//      * .blob()
//      * .formData()
//      * .text()
//      */
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log("error fetching", err));

async function callFetch() {
    const catFacts = await fetch(url, {
        method: "GET",
    });
    if (!catFacts.ok) {
        console.log("something went wrong", catFacts.status);
    }else {
        console.log(catFacts.status)
    }
}

callFetch();

// axios is alternative

