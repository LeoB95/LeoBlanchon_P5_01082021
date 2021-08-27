const contact = JSON.parse(sessionStorage.getItem("contact"));
const orderId = JSON.parse(sessionStorage.getItem("orderId"));
const total = JSON.parse(sessionStorage.getItem("total"));
let html = "";
html += `
    <h1>Confirmation de la commande</h1>
    <ul>
        <li class="infoId">Vos coordonnées</li>
        <li class="infoId">Nom: ${contact.lastName}</li>
        <li class="infoId">Prénom: ${contact.firstName}</li>
        <li class="infoId">Adresse: ${contact.address}</li>
        <li class="infoId">Ville: ${contact.city}</li>
        <li class="infoId">Email: ${contact.email}</li>
    </ul>
    <h3>Total: ${(total / 100).toFixed(2).replace(".", ",")} €</h3>
    <h3>Numéro de la commande: </br> ${orderId}</h3>`;
document.getElementById("order__confirmed").innerHTML = html;
sessionStorage.removeItem("contact");
sessionStorage.removeItem("total");
sessionStorage.removeItem("orderId");
