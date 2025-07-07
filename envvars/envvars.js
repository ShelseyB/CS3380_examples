/* Setting environment varibles */
// macOS/Linux
/**
 * export MY_VARIABLE="Hello, World!"
 * unset MY_VARIABLE
 */

/**
 * Windows
 * set MY_VARIABLE=Hello, World!
 * set MY_VARIABLE=
 */
/** Powershell
 * $env:MY_VARIABLE="Hello, World!"
 * Remove-Item Env:\MY_VARIABLE
 */
console.log("MY_VAR", process.env.MY_VAR, process.env.LANG || "en");

import dotenv from "dotenv";
dotenv.config();
console.log("secret 1", process.env.SECRET_ONE);
console.log("secret 2", process.env.SECRET_TWO);
console.log("node env", process.env.NODE_ENV);