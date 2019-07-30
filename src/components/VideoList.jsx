// /Users/student/Public/hrsf122/hrsf122-recast.ly/src/data/exampleVideoData.js
// /Users/student/Public/hrsf122/hrsf122-recast.ly/src/components/VideoList.jsx

// ReactDOM.render(<App />, document.getElementById("app"));

var VideoList = (props) => (
  <div >
    <div>
      <h5><em>videoListEntry</em> </h5>
      <VideoListEntry />
    </div>

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
