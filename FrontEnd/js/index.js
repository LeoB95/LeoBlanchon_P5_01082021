"use strict";
let url = "http://localhost:3000/api/teddies";

const mainFetch = () => {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      for (i = 0; i < data.length; i++) {
        insertProduct(data[i]);
      }
    })
    .catch((err) => console.error(err));
};
window.onload = mainFetch;
fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    console.log(response); // Création de la variable et ajout des éléments card

    let html = ""; // Boucle pour récupére toutes les variables des produits + (Foreach)

    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name); //Html pur , Créer les élément, clone prototype

      html += `<li class="item">
      <p class="row name">${response[i].name}</p>
     <img id="productImage" class="row" src="${response[i].imageUrl}">
               <div class="addBlock">

             <button class="row addCart"> <b>Ajouter au panier</b><i class="fas fa-cart-arrow-down"> </i></button>
</div>
      <p id="productDescriptionIndex" class="row">${response[i].description}</p>
      <div class="card__bottom">
      <span class="row productPrice">${(response[i].price / 100)
        .toFixed(2)
        .replace(".", ",")}€</span>
      <a id="productLink" class="row" href="./html/products.html?${
        response[i]._id
      }"><b class="row goProduct">Voir l'article</b></a>
      </div>
      </li>`;
    } // Ajouter mes element créer dans le HTML pour afficher mes produits

    document.getElementById("bear").innerHTML = html;
  }) // Message d'erreur
  .catch((e) => {
    errorMessage();
  });
