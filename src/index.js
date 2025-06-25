import home from  "./home.js"
import menu from "./menu.js"
import about from "./about.js"


console.log("Starting index.js");

// Delete all children from content div to prepare for tab switching
function clearContent() {
    const content = document.querySelector("#content");
    if (content.children.length > 0) {
        content.removeChild(content.firstElementChild);
    }
}

// Startup Event
window.addEventListener("load", home);

// Click Events
document.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "btn-home":
            console.log("Loading home");
            clearContent();
            home();
            break;
        case "btn-menu":
            clearContent();
            menu();
            console.log("Loading menu");
            break;
        case "btn-about":
            clearContent();
            about();
            console.log("Loading about");
            break;
        default:
            // Nothing
    }
});