import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      current: exampleVideoData[0]
    };
    this.onTitleItemClick = this.onTitleItemClick.bind(this);

  }

  onTitleItemClick(video) {
    console.log(this);
    this.setState({
      current: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.current}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList onTitleItemClick={this.onTitleItemClick} videos={this.state.allVideos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
// this is a change.