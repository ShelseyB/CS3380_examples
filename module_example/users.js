const users = [
    {
        name: "Bob",
        age: 27
    },
    {
        name: "Jim",
        age: 45
    },
    {
        name: "Martha",
        age: 22
    },
    {
        name: "Gertrude",
        age: 74
    },
];

export default users;

export function getUsersOverAge(age) {
    return users.filter((user) => {
        return user.age > age;
    })
}

export function getUsersUnderAge(age) {
    return users.filter((user) => {
        return user.age < age;
    })
}