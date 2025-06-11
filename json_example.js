const obj = {
    name: "Bob",
    age: 35,
    is_student: false,
    address: {
        street: "Harmony Ave",
        number: 45
    },
    children: ["Martha", "Betty"],
    spouse: null
};

const objJSON = `{
    "name": "Bob",
    "age": 35,
    "is_student": false,
    "address": {
        "street": "Harmony Ave",
        "number": 45
    },
    "children": ["Martha", "Betty"],
    "spouse": null
}`;

// Convert JSON to object
const objJSONToObject = JSON.parse(objJSON);
console.log(objJSON, objJSONToObject);

// Convert object to JSON
const objToJSON = JSON.stringify(obj);
console.log(objToJSON, obj);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(resp => {
        // console.log("resp", resp);
        return resp.json();
    })
    .then(data => {
        console.log(data);
    })

/**
const user = { name: "Alice", age: 30 };
  localStorage.setItem('user', JSON.stringify(user));
  const retrievedUser = JSON.parse(localStorage.getItem('user'));
  console.log(retrievedUser.name); // Output: Alice
 */