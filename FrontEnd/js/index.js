"use strict";

fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let html = ""; // Boucle pour récupére toutes les variables des produits + (Foreach)

    for (let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      html += `<li class="item">
      <p class="row name">${response[i].name}</p>
     <img id="productImage" class="row" src="${response[i].imageUrl}">
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
    }
    document.getElementById("bear").innerHTML = html;
  }) // Message d'erreur
  .catch((e) => {
    errorMessage();
  });
