import $ from 'jquery';
const API_URL = (tags) => `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=?`

export async function searchImgs(tags = '') {
  try {
    const response = await $.getJSON(API_URL(tags), res => {return res})
    const imgs = response.items.map(el => {
      const src = el.link.replaceAll('\\', '')
      const title = el.title.replaceAll('\\', '')
      const alt = el.title
      return { src, title, alt }
    });
    return {imgs}
  } catch (err){
    console.log(err)
    return {err}
  }
}

export default searchImgs;