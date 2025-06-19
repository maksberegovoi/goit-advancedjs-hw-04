import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderImages(data, gallery) {
  const markup = data.hits
    .map((image) => {
      return `
          <li class="gallery-item">
            <a  class="gallery-link" href=${image.largeImageURL}>
              <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
              width="360"
               />
            </a>
            <ul class="gallery-info">
              <li>
                <p>Likes</p>
                <p>${image.likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${image.views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${image.comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${image.downloads}</p>
              </li>
            </ul>
          </li>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);

  const lightBox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionDelay: 250,
    captionsData: 'alt',
  });
  lightBox.refresh()
}

export { renderImages }