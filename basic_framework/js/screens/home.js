let createHomePage = () => {
    console.log("in createHomePage");
    return {
        element: createNav(`<div id="home"><p>Hello World!</p></div>`, "home"),
        afterCreate: () => {
            let page2btn = document.getElementById("page-2");
            page2btn.addEventListener("click", () => {
                console.log("in page2btn event listener")
                // Code to change screen
                const rtn = createPage2();
                main.innerHTML = rtn.element;
                rtn.afterCreate();
            });
        }
    }
}