const json_example = `{
    "name": "Bob",
    "age": 35,
    "is_student": false,
    "address": {
        "street": "Harmony Ave",
        "number": 45
    },
    "children": ["Martha", "Betty"]
}`;

const js_obj = JSON.parse(json_example);
console.log(json_example, js_obj, js_obj["addres"]?.["street"]);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        // console.log("response", response, response.json);
        return response.json();
    })
    .then(data => console.log(data));