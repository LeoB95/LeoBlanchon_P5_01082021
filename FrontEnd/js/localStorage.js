"use strict";

class CartObject {
  get products() {
    return JSON.parse(localStorage.getItem("itemStorage") || "{}");
  }

  set products(products) {
    localStorage.setItem("itemStorage", JSON.stringify(products));
  }

  addProduct(productObject) {
    let products = this.products;
    const productAlreadyInCarte = !!products[productObject._id];

    if (productAlreadyInCarte) {
      products[productObject._id].quantity++;
    } else {
      products[productObject._id] = {
        quantity: 1,
        ...productObject,
      };
    }

    this.products = products;
  }

  getProductQuantity(productId) {
    const products = this.products;
    return products[productId].quantity;
  }

  updateProductQuantity(productId, quantity) {
    const products = this.products;
    products[productId].quantity = quantity;
    console.log(products);
    this.products = products;
  }

  getTotalPrice() {
    const products = this.products;
    const totalPrice = Object.values(products).reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity) / 100;
    }, 0);
    return totalPrice;
  }
}

const Cart = new CartObject();
itemConfirmation();

function itemConfirmation() {
  let div = document.querySelector(".item__number");
  let nomber = 0;

  if (sessionStorage.getItem("itemStorage") !== null) {
    let keyNomber = JSON.parse(sessionStorage.getItem("itemStorage"));
    keyNomber.forEach((prod) => {
      nomber = nomber + prod.quantity;
    });
  }
}

function errorMessage() {
  let html = "";
  html += `<p class="section__error"><b>"Nous ne parvenons pas à vous connecter, vérifiez votre réseau et reessayer"<b></p>`;
  document.querySelector(".error").innerHTML = html;
} ///END
