fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
        // "Content-Type": "text/plain"
    },
    body: JSON.stringify({ name: "Alice", email: "alice@uvu.edu" })
})
    .then((res) => res.json())
    .then(data => console.log(`Data from server: ${JSON.stringify(data)}`))
    .catch(err => console.log(`Error getting data from server`, err));