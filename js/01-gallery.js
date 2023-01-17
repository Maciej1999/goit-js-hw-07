import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
for (let i = 0; i < galleryItems.length; i++) {
  const div = document.createElement("div");
  div.className = "gallery__item";
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.href = `${galleryItems[i].original}`;
  const img = document.createElement("img");
  img.className = "gallery__image";
  img.src = galleryItems[i].preview;
  img.dataset.source = galleryItems[i].original;
  img.alt = galleryItems[i].description;
  link.appendChild(img);
  div.appendChild(link);
  gallery.appendChild(div);
}
gallery.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  const instance = basicLightbox.create(
    `
  <img src="${event.target.dataset.source}">
  `
  );
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
