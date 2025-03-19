let createPage2 = () => {
    console.log("in createHomePage");
    return {
        element: createNav(`<div id="page-2"><p>Page 2!</p></div>`, "page-2"),
        afterCreate: () => {
            let homeBtn = document.getElementById("home");
            homeBtn.addEventListener("click", () => {
                console.log("in homebtn click")
                const rtn = createHomePage();
                main.innerHTML = rtn.element;
                rtn.afterCreate();
            });
        }
    }
}