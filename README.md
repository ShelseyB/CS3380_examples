## CS 3380 Examples

A repository with example code from CS 3380.

### Installation Instructions and Usage Examples

For single files (for example, `promises.js` or `string_interpolation.js`), simply run:

```
node promises.js
```

To run programs with a package.json file in the folder with it (for example, `inquirer/package.json`), initialize the npm modules by running:

```
npm init
```

This only needs to be run once (you can tell if it's been run by the presence of the `node_modules` folder within the folder). Then you can run the file using the following command:

```
npm run start
```

### Examples
```
node .\promises.js       
Whew, glad that's over

After Promise
Promise { <pending> }
data in funcThatRunsAsync { a: 1 }
data in funcThatRunsAsync { a: 1 }
[ 'First promise resolved', 'Second promise resolved' ]
results in race First promise resolved
d { a: 1 }
in timeout
Data received: 34
It's over
```