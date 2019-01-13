var searchYouTube = (options, callback, errorCB) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: true,
      type: 'video',
    },
    success: function(data) {
      console.log('data from youtube', data.items);
      callback(data.items);
    },
    error: errorCB || function(error) {
      console.log('Failed to load YouTube videos', error);
    }
  });
};

//var callback = () => {console.log('success callback invoked!'); };

export default searchYouTube;

// URL: https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
//     &part=snippet,statistics

// buildApiRequest('GET',
// '/youtube/v3/search',
// {'maxResults': '25',
//   'part': 'snippet',
//   'q': 'surfing',
//   'type': ''});
// };

// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }