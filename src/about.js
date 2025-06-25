import "./styles/body.css";
import "./styles/header.css";
import "./styles/content.css";
import familyPhoto from "./img/family.jpg"

function loadAbout() {
    // Create elements for the page
    const divContent = document.querySelector("#content");
    const divAbout = document.createElement("div");
    divAbout.id = "about";
    const h2About = document.createElement("h2");
    const h3Family = document.createElement("h3");
    const imgFamily = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    // Add content into elements
    h2About.innerText = "About";
    h3Family.innerText = "Family run since the beginning of time"
    imgFamily.src = familyPhoto;
    imgFamily.className = "family";
    imgFamily.alt = "The family business photo";
    p1.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est deserunt recusandae beatae, quod, id explicabo saepe";
    p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore culpa blanditiis rem porro aliquam voluptates hic, vero soluta. Ex, atque modi eveniet illo qui suscipit iusto? Expedita, iusto eos!";
    
    // Add new elements as children
    divAbout.append(h2About, h3Family, imgFamily, p1, p2);
    divContent.append(divAbout);
}

export default loadAbout;