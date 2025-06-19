import axios from 'axios';

export function getImagesApi(q) {
  return axios
    .get('https://pixabay.com/api/', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: '50733939-cc357c6b4bbe4fcbb86f08b26',
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}