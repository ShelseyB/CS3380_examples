function createExcessiveObjects() {
    let objectArray = [];
  
    // Create a lot of objects in a loop
    for (let i = 0; i < 100000; i++) {
        objectArray.push({ name: `Object ${i}`, id: i });
    }
  
    // Simulate a memory issue by not cleaning up the objects after use
    console.log(objectArray.length); // This would be 100000

    // FIX: Delete the array to help garbage collection
    // objectArray = [];
    objectArray.length = 0;
}

// Call the function to see the excessive object creation
createExcessiveObjects();

/**If this function is called frequently or with large numbers of objects, it can quickly lead to excessive memory consumption and potentially degrade performance. Even though JavaScript's garbage collector will eventually clean up unreferenced objects, the large number of objects created can still cause performance issues if not managed properly. */
  