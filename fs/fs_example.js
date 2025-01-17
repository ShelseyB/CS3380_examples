import fs from "node:fs";
import fs_prom from "node:fs/promises";
import path from "path"


// Create a new file, write a string to it
function writeFileExamples() {
    // Note: All functions will overwrite the file if it exists

    // Note: this will write to the file path from where the program was run,
    // not from the program's file path
    fs.writeFile("./test_dir/test.txt", "Just doing a little test", (err) => { // callback
        if (err) console.log("there was an error", err);
        console.log("Successfully wrote to file!")
    });

    // Synchronous version
    fs.writeFileSync("./test_dir/test_sync.txt", "Write this file synchronously");

    console.log("after writing file synchronously")

    // Promise version
    fs_prom.writeFile("./test_dir/test_promise.txt", "Another test file blah")
        .then(res => console.log("res of write_file promise", res));

    const obj = {
        a: 1,
        b: 2
    }

    fs.writeFileSync("./myJSONObj.json", JSON.stringify(obj));

}

function readFileExamples() {
    // Callback version
    // Note: utf8 is the encoding version. Leaving it off returns a Buffer object
    fs.readFile("./nums.txt", 'utf8', (err, data) => {
        const lines = data.split("\r\n");
        const nums = [];
        lines.forEach(l => {
            nums.push(l.split(", "))
        });
        console.log("nums", nums);
    });

    // Synchronous version
    const contents = fs.readFileSync("nums.txt", "utf8");
    console.log("synchronous version nums", contents);

    // Promise version
    fs_prom.readFile("nums.txt", "utf8").then(nums => {
        console.log("promise version", nums)
    });

    // JSON example
    fs_prom.readFile("sample_json.json", "utf8")
        .then(contents => JSON.parse(contents))
        .then(contents => console.log("from sample_json", contents, contents.name))
}

// Change bytes into more user-friendly terms
function formatFileSize(sizeInBytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    return `${(sizeInBytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]} `;
}

function statExamples() {
    // Note: stat is available in promises and async form, but we're just going to look at one this time
    const file_stats = fs.statSync("nums.txt");
    console.log("file_stats", file_stats);
    console.log(`File size: ${file_stats.size} bytes`);

    // An example with a much larger file
    const bigger_stats = fs.statSync("large_file_example.jpg");
    console.log("bigger stats", bigger_stats.size);
    const size_str = formatFileSize(bigger_stats.size);
    console.log("The file is", size_str);
}

function deleteExample() {
    // try {
    //     fs.unlinkSync("./test_dir/test.txt");
    //     console.log("deleted file");
    // } catch(err) { // WILL throw an error if the file doesn't exist
    //     console.log("whoops, something went wrong deleting the file", err);
    // }

    // Can check if the file exists before attempting to delete it
    if (fs.existsSync("test.txt")) {
        console.log("deleting file")
        fs.unlinkSync("test.txt");
    } else {
        console.log("whoops, can't delete that file, it doesn't exist")
    }
}

function readDirExample() {
    const dir = "test_dir";
    const files = fs.readdirSync(dir);
    console.log("files", files);
    files.forEach(file => {
        console.log(file);
        const file_path = path.join(dir, file); // returns test_dir/{filename}
        const stat = fs.statSync(file_path);
        if (stat.isDirectory()) {
            const subdir_files = fs.readdirSync(file_path);
            console.log("subdir_files", subdir_files)
        }
    });
}

function main() {
    // writeFileExamples();
    // readFileExamples();
    // statExamples();
    // deleteExample();
    readDirExample();

    /**
     * Other available useful functions:
     * copyFile
     * mkdir
     * rename
     * rmdir
     */
}

main();