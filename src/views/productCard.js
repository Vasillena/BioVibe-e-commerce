import { html } from "../../node_modules/lit-html/lit-html.js";

export const productCard = (product) => html`
  <a class="product-details-link" href="/${product._id}">
    <div class="product">
      <div class="product-img">
        ${product.price.length > 1
          ? html`<div class="sale-img">
              <img src="${product.imageUrl}" width="300px" alt="product-img" />
              <p>SALE</p>
            </div>`
          : html` <img
              src="${product.imageUrl}"
              width="300px"
              alt="product-img"
            />`}
      </div>

      <div class="product-text">
        <h5>${product.name}</h5>
        <p>${product.brand}</p>
        ${product.price.length > 1
          ? html`
              <div class="discount">
                <p class="original-price">€ ${product.price[0]}</p>
                <p class="discounted-price">€ ${product.price[1]}</p>
              </div>
            `
          : html` <p class="only-price">€ ${product.price}</p> `}
      </div>
    </div>
  </a>
`;
