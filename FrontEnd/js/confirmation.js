"use strict";

const contact = JSON.parse(sessionStorage.getItem("contact"));
const orderId = JSON.parse(sessionStorage.getItem("orderId"));
const total = JSON.parse(sessionStorage.getItem("total"));
let html = "";
html += `
    <h1>Confirmation de la commande</h1>
    <div class="orderId">
         <p class="infoId">Nom: ${contact.lastName}</p>
        <p class="infoId">Prénom: ${contact.firstName}</p>
        <p class="infoId">Adresse: ${contact.address}</p>
        <p class="infoId">Ville: ${contact.city}</p>
        <p class="infoId">Email: ${contact.email}</p>
     <p>Total: ${(total / 100).toFixed(2).replace(".", ",")} €</p>
    <h2 class="title__orderId">Numéro de la commande: </br> ${orderId}</h2>
    </div>`;
document.getElementById("order__confirmed").innerHTML = html;
sessionStorage.removeItem("contact");
sessionStorage.removeItem("total");
sessionStorage.removeItem("orderId");
