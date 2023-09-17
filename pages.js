const pages = {};
const pagesButtons = {};
/**
 * @type {Iterable<HTMLDivElement>}
 */
const pagesElementChildren = document.querySelector("#pages").children;
/**
 * @type {Iterable<HTMLButtonElement>}
 */
const pagesButtonsChildren = document.querySelector("#page-selection").children;

let lastPage,currentPage;
function refresh(){
    console.debug(`Current page was set to: ${currentPage}`);
    if(lastPage !== undefined){
        pages[lastPage].classList.add("hidden");
        pagesButtons[lastPage].classList.remove("active");
    }
    pages[currentPage].classList.remove("hidden");
    pagesButtons[currentPage].classList.add("active");
    lastPage = currentPage;
    window.localStorage.setItem("last-page", currentPage);
}
for(const child of pagesElementChildren){
    pages[child.dataset.page] = child;
}
for(const button of pagesButtonsChildren){
    button.addEventListener("click", e => {
        currentPage = button.dataset.page;
        refresh();
    });
    pagesButtons[button.dataset.page] = button;
}
if(window.localStorage.getItem("last-page") === null){
    window.localStorage.setItem("last-page", "projects");
}
currentPage = window.localStorage.getItem("last-page");
refresh();