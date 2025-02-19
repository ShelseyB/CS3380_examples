console.log("MY_VAR", process.env.MY_VAR);

require("dotenv").config();
console.log("secret 1", process.env.SECRET_ONE);
console.log("secret 2", process.env.SECRET_TWO);
console.log("node env", process.env.NODE_ENV);