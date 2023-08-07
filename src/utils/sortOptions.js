export function sortOptions(products, sortBy) {
  switch (sortBy) {
    case "a-z":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "z-a":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case "ascending":
      return products.sort((a, b) => {
        const aPrice =
          a.price.length === 2
            ? parseFloat(a.price[1])
            : parseFloat(a.price[0]);
        const bPrice =
          b.price.length === 2
            ? parseFloat(b.price[1])
            : parseFloat(b.price[0]);
        if (aPrice !== bPrice) {
          return aPrice - bPrice;
        }

        return a.name.localeCompare(b.name);
      });
    case "descending":
      return products.sort((a, b) => {
        const aPrice =
          a.price.length === 2
            ? parseFloat(a.price[1])
            : parseFloat(a.price[0]);
        const bPrice =
          b.price.length === 2
            ? parseFloat(b.price[1])
            : parseFloat(b.price[0]);
        if (aPrice !== bPrice) {
          return bPrice - aPrice;
        }

        return b.name.localeCompare(a.name);
      });
    default:
      return products;
  }
}
