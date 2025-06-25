import "./styles/body.css";
import "./styles/header.css";
import "./styles/content.css";
import logo from "./img/odin.png";

console.log("Starting index.js");

// Event handler for page load
function loadContent(e) {
    // Create elements for the page
    const divContent = document.querySelector("#content");
    const h2Welcome = document.createElement("h2");
    const h3Statement = document.createElement("h3");
    const imgLogo = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    // Add content into elements
    h2Welcome.innerText = "Welcome to Odin's!";
    h3Statement.innerText = "Serving delicious meals and cold brews since 2025";
    imgLogo.src = logo;
    imgLogo.alt = "Odin's Spot Logo"
    p1.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est deserunt recusandae beatae, quod, id explicabo saepe voluptatem ea pariatur optio, odit molestias architecto sapiente aliquam rem iste quam? Eos, odit.";
    p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore culpa blanditiis rem porro aliquam voluptates hic, vero soluta. Ex, atque modi eveniet illo qui suscipit iusto? Expedita, iusto eos!";
    p3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut doloremque nulla non consequatur. Ipsam, corrupti maxime adipisci deleniti dicta sint vitae culpa explicabo ipsa iste deserunt porro. Perferendis, itaque?";
    
    // Add new elements as children
    divContent.append(h2Welcome, h3Statement, imgLogo, p1, p2, p3);

}

window.addEventListener("load", loadContent);