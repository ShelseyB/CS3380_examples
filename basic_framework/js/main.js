let main = document.getElementById("main");


let initialize = () => {
    let rtn = createHomePage();
    main.innerHTML = rtn.element;
    rtn.afterCreate();
}



initialize();