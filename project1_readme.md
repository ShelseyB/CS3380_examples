# Project 1
A nice little program to create and save a todo list

## Installation
To install this program, run `npm install`

## Running the program
To run the program, run:
```
node run ./project1.js
```

## Features
This program will allow you to:
- View a todo list
- Add items to a todo list
* Check items off a todo list
* Remove items from a todo list

### Example Output
```
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue a
Sorry, you don't have anything on your list yet!
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue b
✔ Please enter the new list items. Type "done" when done.
 Finish my lecture
✔ Please enter the new list items. Type "done" when done.
 Write a paper
✔ Please enter the new list items. Type "done" when done.
 Finish my CS 3380 project
✔ Please enter the new list items. Type "done" when done.
 done
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue a
[] Finish my lecture
[] Write a paper
[] Finish my CS 3380 project
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue c
✔ Please enter the number of the item you have finished:
1 Finish my lecture
2 Write a paper
3 Finish my CS 3380 project
 2
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue a
[] Finish my lecture
[X] Write a paper
[] Finish my CS 3380 project
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue d
✔ Please enter the number of the item you would like to remove:
1 Finish my lecture
2 Write a paper
3 Finish my CS 3380 project
 3
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue a
[] Finish my lecture
[X] Write a paper
✔ Would you like to:
  (a) View To Do List
  (b) Add items to list
  (c) Check off an item
  (d) Remove an item
  (e) Quit
  Enter a, b, c or d to continue e
Thanks for playing!
```

Here is a function in the program:
```javascript
const addItems = (...items) => {
    list.push(items);
    return true;
}
```

## Contributing Guidelines
Use the following steps to contribute:
1. Clone the repo
2. Branch off of main
3. Create a pull request

## Progress towards version 2
- [x] Task 1
- [ ] Task 2

## Full Documentation
[Full documentation](google.com)