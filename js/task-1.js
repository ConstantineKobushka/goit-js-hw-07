const categoriList = document.querySelector('#categories');
const categoriItems = Array.from(categoriList.children);
console.log(`Nambers of categories: ${categoriItems.length}`);

categoriItems.forEach(categoriItem => {
  const categoriTitle = categoriItem.firstElementChild.textContent;
  const categoriName = categoriItem.lastElementChild.children;
  console.log(`Categori: ${categoriTitle}`);
  console.log(`Elements: ${categoriName.length}`);
});
