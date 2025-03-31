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
// fetch(url, {
//     method: "GET",  
// }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("error fetching", err));

async function callFetch() {
    const catFacts = await fetch(url, {
        method: "GET",
    });
    console.log(catFacts);
    if (!catFacts.ok) {
        console.log("something went wrong", catFacts.status);
    }
}

// callFetch();

const baseURL = "https://opentdb.com/api.php?amount=3";
const queries = ["&category=20&difficulty=easy&type=multiple", "&category=20&difficulty=medium"];

const waitAndGetNext = async (results, queries) => {
    if (queries.length) {
        const fetchProm = new Promise((res, rej) => {
            fetch(`${baseURL}${queries.pop()}`)
                .then(r => r.json())
                .then((r) => {
                    setTimeout(async () => {
                        console.log("r", r);
                        const fetchRes = await waitAndGetNext([...results, r], queries);
                        console.log("fetchRes", fetchRes);
                        res([...results, r]);
                    }, 5500);
                });
        });
        const fetchRes = await fetchProm;
        return fetchRes;
    }
}

const getTrivia = async () => {
    let results = await waitAndGetNext([], queries);
    console.log("results", results);
}

getTrivia();