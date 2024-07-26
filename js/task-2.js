const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.gallery');

function createGallery(imagesData) {
  imagesData.map(imagesItem => {
    const html = `
      <li class="gallery-item">
        <img class="gallery-img" src="${imagesItem.url}" alt="${imagesItem.alt}" width="360" />
      </li>`;
    galleryList.insertAdjacentHTML('beforeend', html);
  });
}

// function createGallery(imagesData) {
//   imagesData.map(imagesItem => {
//     const galleryItem = document.createElement('li');
//     galleryItem.classList.add('gallery-item');
//     const galleryImg = document.createElement('img');
//     galleryImg.classList.add('gallery-img');
//     galleryImg.setAttribute('src', `${imagesItem.url}`);
//     galleryImg.setAttribute('alt', `${imagesItem.alt}`);
//     galleryImg.setAttribute('width', '360');
//     galleryImg.setAttribute('height', '300');
//     galleryItem.append(galleryImg);
//     galleryList.append(galleryItem);
//   });
// }

createGallery(images);