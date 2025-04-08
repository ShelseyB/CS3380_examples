function createDetachedNodeMemoryLeak() {
    let div = document.createElement('div');
    div.textContent = 'I am a div!';
    document.body.appendChild(div);
  
    // Detach the div element from the DOM, but don't clean up references
    setTimeout(() => {
        document.body.removeChild(div);
        // Even though div is removed from the DOM, it is still referenced in the variable 'div'
        // and will not be collected by the garbage collector

        // FIX: nullify referrence to div
        div = null;
    }, 5000);
}

// Call the function to create the memory leak
createDetachedNodeMemoryLeak();
  