import users, { getUsersOverAge as gUOA, getUsersUnderAge, myBFFsName, bestAge} from "./users.js";

console.log(gUOA(23), getUsersUnderAge(30), myBFFsName, bestAge);

import("./users.js")
    .then((userModule) => {
        console.log(userModule);
    });