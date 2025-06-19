import { getImagesApi } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('#search-images')
const form = document.querySelector('.form')
const gallery = document.querySelector('.gallery')
const loaderContainer = document.querySelector('.loader-container')

const getImages = (event) => {
  event.preventDefault()
  const q = input.value
  if (!q.trim()){
    return
  }


  loaderContainer.style.display = 'flex'
  gallery.innerHTML = ''

  getImagesApi(q)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error()
      }
      form.reset()
      renderImages(data, gallery)
      loaderContainer.style.display = 'none'
    })
    // .then(data => console.log(data))
    .catch(error => {
      // Error handling
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 4000,
        theme: 'dark'
      });
      loaderContainer.style.display = 'none'
    });
}


form.addEventListener('submit', getImages)
