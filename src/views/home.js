import { html } from "../../node_modules/lit-html/lit-html.js";

export const homeTemplate = () =>
  html`<div class="hero-banner">
      <img src="/src/styles/images/hero-banner.jpg" alt="hero-banner" />
    </div>

    <div class="some-text">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas rem
        voluptatum saepe debitis labore aperiam beatae. Inventore esse deleniti
        totam quam odit laudantium! Rerum minima fuga aliquam nostrum quia
        repellat officia ex! Ipsam quaerat quam praesentium obcaecati porro
        itaque velit, dolores, veritatis illum pariatur suscipit ab, eveniet
        optio. Ab, beatae.
      </p>
    </div>

    <div class="some-products">
      <h3>WHAT'S NEW</h3>
      <ul>
        <li>
          <a href="#"
            ><img
              src="/src/styles/images/sample-product.jpg"
              alt="sample-product"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              src="/src/styles/images/sample-product2.jpg"
              alt="sample-product"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img
              src="/src/styles/images/sample-product3.jpg"
              alt="sample-product"
          /></a>
        </li>
      </ul>

      <h3>SOL DE IBIZA</h3>
      <p>
        Finally here! A combination of hero ingredients to provide your skin
        with the perfect nourishing properties to keep it hydrated whilst
        protecting you from harmful UVA and UVB rays.
      </p>
      <p>. . .</p>
    </div>`;

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
