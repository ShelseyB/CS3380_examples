/** NOTE: remember that a polyfill IS a shim,
 * but not all shims are polyfills
 */

/**Example: Shim for Argument Order Mismatch
 * Suppose you’re working with a function that 
 * reverses its argument order compared to 
 * what your existing codebase expects. */

function oldFunction(a, b) {
    console.log(`a: ${a}, b: ${b}`);
}

function newFunction(obj) {
    console.log(`a: ${obj.a}, b: ${obj.b}`);
}

function shimFunction(a, b) {
    return newFunction({b, a});
}

// Example usage:
shimFunction(1, 2); // Adapts to call newFunction(2, 1)

/**Example: Shim for Interfacing with Different Libraries
 * Suppose you’re using two libraries with conflicting 
 * APIs for similar tasks. A shim can normalize their 
 * usage. */
  
LibraryA.doTask({ data: 'some data' });

LibraryB.executeTask('some data');

const taskShim = {
    doTask: (options) => {
        if (LibraryA) {
            return LibraryA.doTask(options);
        } else if (LibraryB) {
            return LibraryB.executeTask(options.data);
        } else {
            throw new Error('No compatible library found');
        }
    }
};

// Example usage:
taskShim.doTask({ data: 'some data' });

