
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
// TODO: Render the `App` component to the DOM


ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));

