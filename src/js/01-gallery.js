// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imgGallery = galleryItems.map(({ preview, original, description }) => {
return `<a  class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="'${description}'"
      title='${description}'
          
    />
  </a>`;
}).join(" ");
gallery.insertAdjacentHTML("beforeend", ` ${imgGallery}`);
var lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});
console.log(galleryItems);

// //option fix li 
// const fixLi = document.querySelectorAll('li');
// fixLi.forEach(item =>item.style.listStyle = 'none');
