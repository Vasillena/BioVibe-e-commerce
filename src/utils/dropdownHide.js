export function dropdownHide() {
  const mediaQuery = window.matchMedia("(min-width: 600px)");

  if (mediaQuery.matches) {
    setTimeout(() => {
      const dropdown = document.querySelector(".dropdown");
      const productsLink = document.querySelector("nav .products");

      dropdown.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
          dropdown.style.display = "none";
        }
      });

      productsLink.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
      });
    }, 100);
  }
}
