function fixClosureMemoryLeak() {
    let data = { name: 'Large Data', details: 'This is a large object' };
  
    // Create a closure that captures 'data'
    function doSomething() {
      console.log(data.details);
    }

    // Even though 'data' is not needed anymore, the closure keeps a reference to it
    // and it will not be garbage collected.
    // setInterval(doSomething, 1000);
  
    // FIX:
    // Use a cleanup mechanism, e.g., clear the interval when done
    let intervalId = setInterval(doSomething, 1000);
  
    // // Stop the interval after 5 seconds to cleanup
    setTimeout(() => {
      clearInterval(intervalId);
      data = null; // Nullify the reference to allow garbage collection
    }, 5000);
  }
  
  // Call the fixed function to prevent the memory leak
  fixClosureMemoryLeak();
  