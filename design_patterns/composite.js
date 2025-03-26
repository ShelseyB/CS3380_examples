// Component Interface
class FileSystemComponent {
    getSize() {
        throw new Error("Must be implemented by concrete components");
    }
}

// Leaf Class
class File extends FileSystemComponent {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

// Composite Class
class Folder extends FileSystemComponent {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    getSize() {
        return this.children.reduce((totalSize, child) => totalSize += child.getSize(), 0);
    }

    add(component) {
        this.children.push(component);
    }
}

// Client code

let file1 = new File("File 1.txt", 10);
let file2 = new File("File 2.txt", 20);
let file3 = new File("File 3.txt", 30);

let folder1 = new Folder("Folder 1");
let folder2 = new Folder("Folder 2");

folder1.add(file1);
folder2.add(file2);
folder2.add(file3);

let rootFolder = new Folder("Root");
rootFolder.add(folder1);
rootFolder.add(folder2);

console.log(folder1.getSize(), file1.getSize(), rootFolder.getSize());

