export function formatCategoryName(pathname) {
  let firstSplit = pathname.split("/");
  let secondSplit = firstSplit[1].split("");

  for (let i = 0; i <= secondSplit.length; i++) {
    if (
      secondSplit[i].charCodeAt() >= 65 &&
      secondSplit[i].charCodeAt() <= 90
    ) {
      let letter = secondSplit[i];
      let thirdSplit = firstSplit.join("").split(letter);
      let result = thirdSplit.join(" c");
      return result;
    }
  }
}
