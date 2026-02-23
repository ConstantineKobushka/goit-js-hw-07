const categoriesList = document.querySelector('#categories');

const getCategoriesInfo = () => {
  const categoriesItems = Array.from(categoriesList.children);
  console.log(`Number of categries: ${categoriesItems.length}`);

  categoriesItems.forEach(categoriesItem => {
    const categoriesTitle = categoriesItem.firstElementChild.textContent;
    const categoriesElements = categoriesItem.lastElementChild.children;
    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesElements.length}`);
  });
};

getCategoriesInfo(categoriesList);
