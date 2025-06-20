import axios from 'axios';

export async function getImagesApi(q, page, perPage) {

  const response = await axios
    .get('https://pixabay.com/api/', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        key: '50733939-cc357c6b4bbe4fcbb86f08b26',
        q: q,
        image_type: 'photo',
        page: page,
        per_page: perPage,
        orientation: 'horizontal',
        safesearch: true,
      }
    })

  return response.data
}