import axios from 'axios';

const API_URL = (tags) => `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=JSON_CALLBACK`

async function searchImgs(tags = '') {
  try {
    const response = await axios.get(API_URL(tags))
    const imgs = response.items.map(el => {
      const src = el.link.replaceAll('/', '')
      const title = el.title.replaceAll('/', '')
      const alt = el.description || el.title
      return { src, title, alt }
    });
    return imgs
  } catch {
    // handle error
  }
}

exports.searchImgs = searchImgs;