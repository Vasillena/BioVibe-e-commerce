import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById } from "../data/products.js";

export const detailsTemplate = (
  product,
  changeMainImage,
  currentMainImage
) => html`<section class="product-details">
  <div class="product-details-title">
    <h3>${product.name}</h3>
    <p>${product.brand}</p>
  </div>

  <div class="product-details-img">
    ${product.price.length > 1
      ? html`<div class="sale-img">
          <img src="${product.imageUrl}" width="600px" alt="product-img" />
          <p class="details-img-sale">SALE</p>
        </div>`
      : html` <img
          src="${product.imageUrl}"
          width="600px"
          alt="product-img"
        />`}
  </div>

  <div class="product-details-other-imgs">
    ${product.detailsImages.map(
      (image) => html` <button
        class="${image === currentMainImage ? "selected-thumbnail" : ""}"
      >
        <img
          src="${image}"
          width="150px"
          alt="product-img"
          @click=${() => changeMainImage(image)}
        />
      </button>`
    )}
  </div>

  <p class="message">
    !!! The thumbnail borders work properly, it's just that I'm using an image
    with the same name in the server. =) !!!
  </p>

  <div class="buy-section">
    ${product.price.length > 1
      ? html`
          <div class="discount">
            <p class="original-price">€ ${product.price[0]}</p>
            <p class="discounted-price">€ ${product.price[1]}</p>
          </div>
        `
      : html` <p class="only-price">€ ${product.price}</p> `}
    <button class="add-to-cart">ADD TO CART</button>
  </div>

  <div class="product-details-description">
    <p>${product.description.map((line) => html`${line}<br />`)}</p>
  </div>
  <div class="star-rating">
    ${Array.from({ length: 5 }, (_, index) =>
      product.rating > index
        ? html`<i class="fa-solid fa-star" style="color: #444444;"></i>`
        : html`<i class="fa-regular fa-star" style="color: #444444;"></i>`
    )}
  </div>

  ${productAddedTemplate()}
</section>`;

const productAddedTemplate = () =>
  html`<div class="product-added"><p>Product added to cart</p></div>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const product = await getById(id);

  let currentMainImage = product.imageUrl;

  function changeMainImage(newImage) {
    const mainProductImage = document.getElementById("mainImage");
    mainProductImage.src = newImage;
    currentMainImage = newImage;
    ctx.render(detailsTemplate(product, changeMainImage, currentMainImage));
  }

  ctx.render(detailsTemplate(product, changeMainImage, currentMainImage));

  const addToCartButton = document.querySelector(".add-to-cart");
  const addedToCartMessage = document.querySelector(".product-added");

  addToCartButton.addEventListener("click", async () => {
    addedToCartMessage.classList.toggle("show");
    setTimeout(() => addedToCartMessage.classList.remove("show"), 3000);
  });
}
