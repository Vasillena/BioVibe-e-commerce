import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { aboutPage } from "./views/about.js";
import { contactPage } from "./views/contact.js";
import { productsPage } from "./views/products.js";
import { detailsPage } from "./views/productDetails.js";
import { dropdownHide } from "./utils/dropdownHide.js";
import { menuResponsiveButton } from "./utils/menuResponsiveButton.js";

const root = document.getElementById("wrapper");

page(decorateContext);
page("index.html", "/");
page("/", homePage);
page("/aboutUs", aboutPage);
page("/contact", contactPage);
page("/hairCare", productsPage);
page("/bodyCare", productsPage);
page("/:id", detailsPage);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  render(layoutTemplate(content), root);
}

dropdownHide();
menuResponsiveButton();
