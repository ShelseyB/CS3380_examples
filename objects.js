const obj = {
    key: "value",
    key2: "value2",
    num: 234,
    obj: {
        name: "Bob"
    },
    un_score: "hi",
    "hi-there": "hi there",
    "hi there": "hi there again"
};

const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 1998;

console.log(obj);
console.log(car);

// Accessing values
console.log(obj.num, obj.obj, obj.obj.name);
console.log(obj["num"], obj["obj"].name, obj["hi-there"]);
const property = "un_score";
console.log(obj[property]);

// Modifying Properties
obj.num = 567;
console.log(obj.num);
obj["obj"] = {
    name: "Bob",
    job: "Programmer"
};
obj["obj"].name = "Jimmy"
console.log(obj.obj);

// Adding Properties
obj.something_new = "new!"
console.log(obj);

// Deleting Properties
delete obj.something_new;
delete obj["num"];
console.log(obj);

// Object Methods
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello ${this.name}`)
    },
    go_away() {
        console.log(`Go away, ${this.name}`);
    }
}

person.greet();
person.go_away();

// Iteration over keys
for (let key in person) {
    console.log("key", key, person[key]);
}

// Computed Properties
const prefix = "user_";
let person2 = {
    name: "Jimmy",
    [`${prefix}age`]: 30
};
console.log(person2);

// Use Case
/**
let eventType = "click";
let buttonActions = {
    [eventType + "_handler"]: function() {
        console.log("Button clicked!");
    }
};
buttonActions.click_handler();
 */

// Object functions
console.log(Object.keys(obj));
console.log(Object.values(obj));

// Checking for keys
console.log(obj.hasOwnProperty("key"), obj.hasOwnProperty("key3"));

let sthg = obj?.key3?.name;
let sthgElse = obj["obj"]?.["name"]
console.log(sthg, sthgElse);

// Destructuring
let house = {
    rooms: 3,
    baths: 2.5,
    other_rooms: {
        kitchen: 1,
        living: 2
    }
};

let { rooms: bedrooms, baths: bathrooms, price, other_rooms: { kitchen, living } } = house;
let { rooms, baths } = house;

console.log(rooms, baths, bedrooms, bathrooms, price, kitchen, living);
