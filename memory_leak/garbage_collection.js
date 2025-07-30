function example() {
    let obj = {"hi": "hello", bye: "good-bye"};
}
// obj is out of scope now, eligible for GC
example();
