"use strict";

const productId = window.location.search.substr(1);
fetch(`http://localhost:3000/api/teddies/${productId}`)
  .then((response) => response.json())
  .then((response) => {
    let html = "";
    html += `<h1 class="row">Ours "${response.name}" </h1>
    <div class="product__card">
        <p class="row"><img id="productImageCard" src="${
          response.imageUrl
        }" alt="image d'ours en détails"></p>
        <div class="bubble__box">
      <div class="bubble__center">
              <div class="bubble__text">
         <label for="select__color">
            <p class="labelColor">Choisissez ma couleur :  </p>
        </label>
         <select class="section__choice" name="colors" id="select__color">
            <!-- Mes choix de couleurs dans la function forEach --!>
            </select>
        </div>
        </div>
          <div class="bubble__left-point"></div>
              </div>
<div class="product__info">
        <p id="productDescriptionCardProd" class="row rowDescription">${
          response.description
        }</p>
<div class ="rowInfo">
        <p class="row row__price"><b>Prix: ${(response.price / 100)
          .toFixed(2)
          .replace(".", ",")}€</b></p>
          <div class="addBlock">
           <button class="addCart" ><b>Ajouter au panier</b><i class="fas fa-cart-arrow-down   addIcon"></i></button>
          </div>
          </div>
</div>
         </div> `;
    document.getElementById("item__details").innerHTML = html;
    let choice = document.querySelector(".section__choice");
    response.colors.forEach(function (colors) {
      let option = document.createElement("option");
      option.value = colors;
      option.textContent = colors;
      choice.appendChild(option);
    });
    let cartBtn = document.querySelector(".addCart");
    cartBtn.addEventListener("click", () => {
      let select = document.querySelector(".section__choice");
      response.selectColors = select.options[select.selectedIndex].value;
      addItemCart(response);
    });
  })
  .catch((e) => {
    errorMessage();
    console.log(e);
  });

function addItemCart(item) {
  let cartItem = [];
  let saveItemCart = {
    _id: item._id,
    imageUrl: item.imageUrl,
    name: item.name,
    price: item.price,
    quantity: 1,
    selectColors: item.selectColors,
  };
  let otherItem = true;

  if (sessionStorage.getItem("itemStorage") === null) {
    cartItem.push(saveItemCart);
    sessionStorage.setItem("itemStorage", JSON.stringify(cartItem));
  } else {
    cartItem = JSON.parse(sessionStorage.getItem("itemStorage"));
    cartItem.forEach((prod) => {
      if (item._id === prod._id && item.selectColors === prod.selectColors) {
        prod.quantity++;
        otherItem = false;
      }
    });
    if (otherItem) cartItem.push(saveItemCart);
    sessionStorage.setItem("itemStorage", JSON.stringify(cartItem));
  }

  itemConfirmation();
  alert("Votre produit a été ajouté au panier");
} ///END
