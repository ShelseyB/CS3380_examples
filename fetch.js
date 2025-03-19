/** Get
 * Put
 * Post
 * Delete
 */

const url = "https://meowfacts.herokuapp.com/?count=3";


/** other ways to process:
 * .arrayBuffer()
 * .blob()
 * .formData()
 * .text()
 */
fetch(url, {
    method: "GET",  
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("error fetching", err));

async function callFetch() {
    const catFacts = await fetch(url, {
        method: "GET",
    });
    console.log(catFacts);
    if (!catFacts.ok) {
        console.log("something went wrong", catFacts.status);
    }
}

callFetch();