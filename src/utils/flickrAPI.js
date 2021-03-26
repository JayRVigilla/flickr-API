import jsonp from './jsonp';
import axios from 'axios';

const API_URL = (tags) => `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=JSON_CALLBACK`

// export async function searchImgs(tags = '') {
//   try {
//     console.log('*****\n\n Value of tags in flickrAPI', tags, '\n\n *****')
//     // const response = await axios.get(API_URL(tags))
//     console.log('*****\n\n Value of response in flickrAPI', response, '\n\n *****')
//     const imgs = response.items.map(el => {
//       const src = el.link.replaceAll('/', '')
//       const title = el.title.replaceAll('/', '')
//       const alt = el.description || el.title
//       return { src, title, alt }
//     });
//     console.log("** imgs **\n", imgs)
//     return imgs
//   } catch (err){
//     // handle error
//     console.log(err)
//     return err
//   }
// }

// export default searchImgs;

export default ( tags, callback) =>
jsonp(
  tags,
  res => callback(JSON.parse(res.data))
  );

  // export default callback =>
  // jsonp(
  //   API_URL(tags),
  //   response => callback(JSON.parse(response.data))
  // );