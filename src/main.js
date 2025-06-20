import { getImagesApi } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('#search-images')
const form = document.querySelector('.form')
const gallery = document.querySelector('.gallery')
const loaderContainer = document.querySelector('.loader-container')
const loadMoreButton = document.querySelector('.load-more-btn')
let page = 1
let perPage = 15
let q = null

const getImages = async (event) => {
  event.preventDefault()
  page = 1
  q = input.value
  if (!q.trim()){
    return
  }

  loadMoreButton.classList.remove('is-active')
  loaderContainer.style.display = 'flex'
  gallery.innerHTML = ''

  try {
    const data = await getImagesApi(q, page, perPage)
    if (data.hits.length === 0) {
      throw new Error()
    }
    form.reset()
    renderImages(data, gallery)
    loadMoreButton.classList.add('is-active')
    loaderContainer.style.display = 'none'
  }
  catch (error){
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 4000,
      theme: 'dark'
    });
    loaderContainer.style.display = 'none'
  };
}


form.addEventListener('submit', getImages)
loadMoreButton.addEventListener('click', async ()=>{
  page++
  loadMoreButton.classList.remove('is-active')
  try {
    loaderContainer.style.display = 'flex'
    const data = await getImagesApi(q, page, perPage)
    if (data.hits.length === 0) {
      throw new Error()
    }
    if (page * perPage >= data.totalHits){
      loadMoreButton.classList.remove('is-active')
      loaderContainer.style.display = 'none'
      throw new Error()
    }
    renderImages(data, gallery)
    loaderContainer.style.display = 'none'
    loadMoreButton.classList.add('is-active')

    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const itemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: itemHeight * 2.5,
        behavior: 'smooth',
      });
    }
  }
  catch (error){
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      timeout: 5000,
      theme: 'dark'
    });
  };
})
