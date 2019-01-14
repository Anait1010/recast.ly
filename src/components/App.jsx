import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        id: {},
        snippet: {}
      },
      videoQueue: [],
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    var callback = this.initialVideos.bind(this);
    this.props.searchYouTube({
      query: 'hedgehogs',
      max: 5,
      key: YOUTUBE_API_KEY
    }, callback);
  }

  initialVideos(videos) {
    this.setState({
      currentVideo: videos[0],
      videoQueue: videos
    });
  }

  handleInput(event) {
    
    this.setState({
      value: event.target.value
    });
   
    var callback = this.initialVideos.bind(this);
    _.debounce(() => {
      this.props.searchYouTube({
        query: event.target.value,
        max: 5,
        key: YOUTUBE_API_KEY
      }, callback);
    }, 500);
  }
 


  render() {  
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleInput={this.handleInput.bind(this)} value={this.state.value}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList clicked={this.handleClick} videos={this.state.videoQueue}/>
        </div>
      </div>
    </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

