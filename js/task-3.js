const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const createGalleryItemMarkup = ({ url, alt }) => {
  return `
  <li class="item">
  <img src="${url}" alt="${alt}">
  </li>
  `;
};

const createGallery = images.map(createGalleryItemMarkup).join('');

galleryRef.insertAdjacentHTML('afterbegin', createGallery);

console.log(galleryRef);





// const galleryRef = document.querySelector('#gallery');

// const createGalleryItem = ({ url, alt }) => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list-item');

//   const image = document.createElement('img');
//   image.setAttribute('src', url);
//   image.setAttribute('alt', alt);
//   image.classList.add('item');
  
//   listItem.append(image);

//   return listItem;
// };

// const gallery = images.map(createGalleryItem);
// console.log(gallery);

// galleryRef.append(...gallery);
// console.log(galleryRef);
