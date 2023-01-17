import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement("a");
  link.className = "gallery__item";
  link.href = `${galleryItems[i].original}`;
  const img = document.createElement("img");
  img.className = "gallery__image";
  img.src = galleryItems[i].preview;
  img.alt = galleryItems[i].description;
  link.appendChild(img);
  gallery.appendChild(link);
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
