import ProgressBar from "progress";

// Create a new progress bar with a total of 20 steps
// First parameter: format of the bar
    /**:bar - the progress bar itself
     * :current - current tick number
     * :total - total ticks
     * :elapsed - time elapsed in seconds
     * :percent - completion percentage
     * :eta - estimated completion time in seconds
     * :rate - rate of ticks per second */
// Second parameter: options
    /**
     * curr - current completed index
     * total - total number of ticks to complete
     * width - the displayed width of the progress bar defaulting to total
     * stream - the output stream defaulting to stderr
     * head - head character defaulting to complete character
     * complete - completion character defaulting to "="
     * incomplete - incomplete character defaulting to "-"
     * renderThrottle - minimum time between updates in milliseconds defaulting to 16
     * clear - option to clear the bar on completion defaulting to false
     * callback - optional function to call when the progress bar completes */
// const bar = new ProgressBar(':bar :percent', { total: 20 });

// // Simulate a process updating the progress bar
// const timer = setInterval(() => {
//   bar.tick(); // Increment progress

//   if (bar.complete) {
//     console.log('\nTask complete!');
//     clearInterval(timer);
//   }
// }, 100);

// Create a progress bar with a custom format
// const bar2 = new ProgressBar('[:bar] :percent | ETA: :etas | Step: :current/:total', {
//     total: 30, // Total steps
//     width: 40, // Bar width
//     complete: '+', // Character for completed progress
//     incomplete: '|', // Character for remaining progress
//     clear: true, // Clear the bar when done
//     head: "-" // Next character to change
// });
  
// const timer2 = setInterval(() => {
//     bar2.tick(); // Increment progress
  
//     if (bar2.complete) {
//       console.log('\nAll steps completed!');
//       clearInterval(timer2);
//     }
// }, 100);

// Create a progress bar with a custom format and dynamic payloads
// :speed in the progress bar format is a custom token
// const bar = new ProgressBar('Downloading [:bar] :percent | Speed: :speed MB/s', {
//     total: 15,
//     width: 30
// });
  
// let speed = 5; // Simulated download speed
  
// const timer = setInterval(() => {
//     speed = (Math.random() * 10).toFixed(2); // Generate a random speed
//     bar.tick({ speed }); // Update the bar with a dynamic value (speed will fill in where the custom ":speed" token appears in the bar format)
  
//     if (bar.complete) {
//       console.log('\nDownload complete!');
//       clearInterval(timer);
//     }
// }, 200);
