

function createMemoryLeak() {
    // Create a DOM element
    const button = document.createElement('button');
    button.textContent = 'Click Me';
  
    // Append the button to the body
    document.body.appendChild(button);
  
    // Add an event listener to the button
    const btnListenerCallback = function handleClick() {
      console.log('Button clicked');
    }
    button.addEventListener('click', btnListenerCallback);
  
    // Simulate the button being removed from the DOM
    setTimeout(function() {
      document.body.removeChild(button);
      // Note: The event listener is still attached, even though the element is removed

      // FIX:
      button.removeEventListener("click", btnListenerCallback);
    }, 5000);
  }
  
  // Call the function to see the memory leak in action
  createMemoryLeak();
  