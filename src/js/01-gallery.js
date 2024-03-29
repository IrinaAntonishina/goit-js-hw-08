// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery')

const createMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}).join('')

galleryList.insertAdjacentHTML('afterbegin', createMarkup);

let gallery = new SimpleLightbox('.gallery a', {showCounter: false, close:false, captionDelay:250});

console.log(galleryItems);
