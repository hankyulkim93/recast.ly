// /Users/student/Public/hrsf122/hrsf122-recast.ly/src/data/exampleVideoData.js
// /Users/student/Public/hrsf122/hrsf122-recast.ly/src/components/VideoList.jsx

// ReactDOM.render(<App />, document.getElementById("app"));

import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className='video-list'>
    {props.videos.map(video =>
      <VideoListEntry onTitleItemClick={props.onTitleItemClick} video={video}/>)}
    {/* <div>
      <VideoListEntry video={props.videos[0]}/>
    </div>
    <div>
      <VideoListEntry video={props.videos[1]}/>
    </div>
    <div>
      <VideoListEntry video={props.videos[2]}/>
    </div>
    <div>
      <VideoListEntry video={props.videos[3]}/>
    </div>
    <div>
      <VideoListEntry video={props.videos[4]}/>
    </div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// REFERENCE https://medium.com/@eperiou/react-basics-19e43be02236