import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../data/products.js";
import { formatCategoryName } from "../utils/formatCategoryName.js";
import { sortOptions } from "../utils/sortOptions.js";
import { productCard } from "./productCard.js";
import { setupDoubleSlider } from "../utils/setupDoubleSlider.js";
import { filterResponsiveButton } from "../utils/filterResponsiveButton.js";

export const productsTemplate = (products) => html`
  <section class="product-page">
    <aside class="filter" style="left: -100%;">
      <h3>FILTER</h3>

      <h5>BRAND</h5>
      <input
        type="checkbox"
        class="filter-check"
        id="eliah-sahil"
        name="eliah-sahil"
        value="Eliah Sahil"
      />
      <label for="eliah-sahil">Eliah Sahil</label>
      <br />
      <input
        type="checkbox"
        class="filter-check"
        id="puremetics"
        name="puremetics"
        value="Puremetics"
      />
      <label for="puremetics">Puremetics</label>
      <br />
      <input
        type="checkbox"
        class="filter-check"
        id="we-love-the-planet"
        name="we-love-the-planet"
        value="We love the Planet"
      />
      <label for="we-love-the-planet">We love the planet</label>
      <br />
      <input
        type="checkbox"
        class="filter-check"
        id="wondr"
        name="wondr"
        value="Wondr"
      />
      <label for="wondr">Wondr</label>
      <br />
      <br />

      <h5>PRICE</h5>
      <div class="range-slider">
        <div class="sliders-container">
          <div class="slider first">
            <input
              type="range"
              class="min"
              min="0"
              max="100"
              value="0"
              step="10"
              id="doubleSliderMin"
            />
          </div>
          <div class="slider second">
            <input
              type="range"
              class="max"
              min="0"
              max="100"
              value="100"
              step="10"
              id="doubleSliderMax"
            />
          </div>
        </div>
        <div>
          <input class="slider-value" type="number" id="minValue" value="0" />
          <input class="slider-value" type="number" id="maxValue" value="100" />
        </div>
      </div>

      <button class="close-button">DONE</button>
    </aside>

    <div class="category-and-sort">
      <div class="category">
        <h3>${formatCategoryName(window.location.pathname)}</h3>
      </div>
      <div class="sort-by">
        <button class="filter-button">Filter</button>
        <label for="sort">Sort by:</label>
        <select name="sort" id="sort">
          <option value="a-z">Alphabetical a-z</option>
          <option value="z-a">Alphabetical z-a</option>
          <option value="ascending">Price ascending</option>
          <option value="descending">Price descending</option>
        </select>
      </div>
    </div>

    <div class="product-grid">
      ${products.length > 0
        ? products
            .filter((product) => product.category == window.location.pathname)
            .map(productCard)
        : html`<p class="no-products">No products available!</p>`}
    </div>

    <div class="load-more">
      <p class="products-count"></p>
      <button>Load more</button>
    </div>
  </section>
`;

const productsPerPage = 15;

export async function productsPage(ctx) {
  // ------------------LOAD PRODUCTS------------------

  async function loadProducts() {
    const products = await getAll();
    return products.filter(
      (product) => product.category === window.location.pathname
    );
  }
  // -------------------------------------------------

  let currentPage = 1;
  let filteredProducts = await loadProducts();
  function displayProducts() {
    let displayProducts = filteredProducts.slice(
      0,
      productsPerPage * currentPage
    );

    return displayProducts;
  }

  // -----------------UPDATE DISPLAY-----------------

  function updateDisplay(products) {
    ctx.render(productsTemplate(products));

    const productsCountElement = document.querySelector(".products-count");

    const loadMoreButton = document.querySelector(".load-more button");

    displayProducts();
    productsCountElement.textContent = `${displayProducts().length}/${
      filteredProducts.length
    }`;

    if (displayProducts().length >= filteredProducts.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block";
    }
  }

  updateDisplay(displayProducts());

  // ------------------------------------------------

  // ----------------------SORT----------------------

  function applySorting(sortBy) {
    filteredProducts = sortOptions(filteredProducts, sortBy);
    currentPage = 1;
    updateDisplay(filteredProducts);
  }

  const sortDropdown = document.querySelector("#sort");
  sortDropdown.addEventListener("change", (event) => {
    const sortBy = event.target.value;
    applySorting(sortBy);
  });

  // ------------------------------------------------

  // --------------------LOAD MORE-------------------

  function loadMore() {
    currentPage++;
    updateDisplay(displayProducts());
  }

  const loadMoreButton = document.querySelector(".load-more button");
  loadMoreButton.addEventListener("click", loadMore);

  // ------------------------------------------------

  // ------------------FILTERS------------------

  let selectedBrands = [];

  async function applyBrandFilter(brand) {
    if (!selectedBrands.includes(brand)) {
      selectedBrands.push(brand);
    } else {
      selectedBrands = selectedBrands.filter((b) => b !== brand);
    }
  }

  async function updateFilteredProducts() {
    const allProducts = await loadProducts();
    if (selectedBrands.length === 0) {
      filteredProducts = allProducts;
    } else {
      filteredProducts = allProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    const minPrice = parseInt(minValue.value);
    const maxPrice = parseInt(maxValue.value);

    filteredProducts = filteredProducts.filter((product) => {
      const productPrice = Math.min(
        ...product.price.map((price) => parseFloat(price))
      );
      return productPrice >= minPrice && productPrice <= maxPrice;
    });

    currentPage = 1;
    updateDisplay(filteredProducts);
  }

  const brandCheckboxes = document.querySelectorAll(".filter-check");

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", async (event) => {
      const brand = event.target.value;
      applyBrandFilter(brand);
      updateFilteredProducts();
      loadMore();
    });
  });

  // ------------------------------------------------

  // ------------------DOUBLE SLIDER-----------------

  setupDoubleSlider();

  doubleSliderMin.addEventListener("input", () => {
    updateFilteredProducts();
    loadMore();
  });
  doubleSliderMax.addEventListener("input", () => {
    updateFilteredProducts();
    loadMore();
  });
  minValue.addEventListener("input", () => {
    updateFilteredProducts();
    loadMore();
  });
  maxValue.addEventListener("input", () => {
    updateFilteredProducts();
    loadMore();
  });

  // ------------------------------------------------

  // -----------------RESET FIILTERS-----------------

  let pathname = location.pathname;
  window.addEventListener("click", function () {
    if (location.pathname != pathname) {
      resetFilters();
      pathname = location.pathname;
    }
  });

  function resetFilters() {
    selectedBrands = [];
    doubleSliderMin.value = 0;
    doubleSliderMax.value = 100;
    minValue.value = 0;
    maxValue.value = 100;

    brandCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  // ------------------------------------------------

  filterResponsiveButton();
}
