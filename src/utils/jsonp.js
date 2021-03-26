// modified from https://codesandbox.io/s/j3j31qvq2v?file=/jsonp.js:0-433
const API_URL = (ts) => `http://api.flickr.com/services/feeds/photos_public.gne?tags=${ts}&format=json&jsoncallback=JSON_CALLBACK`

export default (tags, callback) => {
  // const callbackName = 'JSON_CALLBACK' + Math.round(100000 * Math.random());
  window['JSON_CALLBACK'] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement('script');
  script.src =
    API_URL(tags)
    // url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
};
