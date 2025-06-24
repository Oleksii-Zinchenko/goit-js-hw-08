const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Numbers of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const elementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
