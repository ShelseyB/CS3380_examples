fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
        // "Content-Type": "text/plain"
    },
    body: JSON.stringify({"Test string": "string"}),
  })
    .then(response => response.json()) // Assuming the response is in JSON format
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
  