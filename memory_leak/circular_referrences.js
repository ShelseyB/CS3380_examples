function createCircularReference() {
    let obj1 = { name: 'Object 1' };
    let obj2 = { name: 'Object 2' };
  
    // Create a circular reference
    obj1.ref = obj2;
    obj2.ref = obj1;
  
    // After this point, even though obj1 and obj2 are no longer in use,
    // the references to each other prevent them from being garbage collected.

    // FIX: Break the circular reference before letting the objects go out of scope
    obj1.ref = null; // Nullify the reference to obj2
    obj2.ref = null; // Nullify the reference to obj1
}

createCircularReference();
  