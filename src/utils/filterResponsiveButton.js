export function filterResponsiveButton() {
  const filterButton = document.querySelector(".filter-button");
  const closeButton = document.querySelector(".close-button");
  const filterContainer = document.getElementsByTagName("aside");

  filterButton.addEventListener("click", () => {
    if (filterContainer[0].style.left === "-100%") {
      filterContainer[0].style.left = "2em";
    } else {
      filterContainer[0].style.left = "-100%";
    }
  });

  closeButton.addEventListener("click", () => {
    if (filterContainer[0].style.left === "2em") {
      filterContainer[0].style.left = "-100%";
    }
  });
}
