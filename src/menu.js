import "./styles/body.css";
import "./styles/header.css";
import "./styles/content.css";

function loadMenu() {
    // Create elements for the page
    const divContent = document.querySelector("#content");
    const divAbout = document.createElement("div");
    divAbout.id = "menu";
    const h2Menu = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    // Add content into elements
    h2Menu.innerText = "Menu";
    p1.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est deserunt recusandae beatae, quod, id explicabo saepe voluptatem ea pariatur optio, odit molestias architecto sapiente aliquam rem iste quam? Eos, odit.";
    p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore culpa blanditiis rem porro aliquam voluptates hic, vero soluta. Ex, atque modi eveniet illo qui suscipit iusto? Expedita, iusto eos!";
    p3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut doloremque nulla non consequatur. Ipsam, corrupti maxime adipisci deleniti dicta sint vitae culpa explicabo ipsa iste deserunt porro. Perferendis, itaque?";
    
    // Add new elements as children
    divAbout.append(h2Menu, p1, p2, p3);
    divContent.append(divAbout);
}

export default loadMenu;