import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const gallery = document.querySelector('.gallery');
function createMarkup(arr) {
  let markup;
  markup = arr
    .map(
      ({ preview, description, original }) =>
        `    <li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>
        `
    )
    .join('');
    gallery.innerHTML = markup;
};

createMarkup(galleryItems)
gallery.addEventListener('click', onClick);
function onClick (e) {
    e.preventDefault();
    if(e.target.classList.contains('gallery__image')){
        let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionSelector: 'img',
    captionPosition: 'top',
    captionDelay: 200,
});
gallery.on('show.simplelightbox', function () {});
    }
}
