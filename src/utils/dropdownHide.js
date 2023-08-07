export function dropdownHide() {
  const mediaQuery = window.matchMedia("(min-width: 600px)");

  if (mediaQuery.matches) {
    setTimeout(() => {
      const dropdown = document.querySelector(".dropdown");
      const productsLink = document.querySelector("nav .products");

      dropdown.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
          dropdown.style.display = "none";
          dropdown.style.visibility = "hidden";
        }
      });

      productsLink.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
        dropdown.style.visibility = "visible";
      });
    }, 1000);
  }
}
