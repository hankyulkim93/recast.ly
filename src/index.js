// TODO: Render the `App` component to the DOM
import App from './components/App.js';


ReactDOM.render(<App />, document.getElementById('app'));

// Hook together the Video List and Video Player components
// Now it's time to make the stateless functional components interact. In React, sibling components can not directly access each other, so they need the help of a parent component to manage communication between them. In this case, App is the parent component for the sibling components VideoList and VideoPlayer.

//  If you haven't already, complete [Course] 6ees6ees6ees.
//  Refactor App into a class component  using ES6 classes

//  Initialize the state of App to keep track of all the videos in the video list and the current video in the player. Pass this state down as props to its children components. Continue to use the example data.

//  Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.
//  Make sure all the active tests for App are passing. You can open the tests with npm test

// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props);
        
//         // `state` is just an object literal
//         this.state = {
//             // done: false
//             boldened: false
//         };
//     }

//     // When a list item is hovered, we will toggle the `boldened`
//     // boolean, and our component's `render` method will run again
//     onListItemHover() {
//     // onListItemClick() {
//       this.setState({
//         boldened: !this.state.boldened
//         // done: !this.state.done
//       });
//     }

//     // https://www.w3schools.com/jsref/event_onmouseover.asp
//     // Example
//     // Execute a JavaScript when moving the mouse pointer onto an image:
//     // <img onmouseover="bigImg(this)" src="smiley.gif" alt="Smiley">

//     render() {
//       // Making the style conditional on our `state` lets us
//       // update it based on user interactions.
//       var style = {
//         // textDecoration: this.state.done ? 'line-through' : 'none'
//         fontWeight: this.state.boldened ? 'bold' : 'normal'
//       };

//       // You can pass inline styles using React's `style` attribute to any component
//       // snake-cased css properties become camelCased this this object
//       return (
//         // <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
//         <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
//       );
//     }


//     //     return (
//     //         <li>{this.props.groceryItem}</li>
//     //     );
//     // }
// }

// var GroceryList = (props) => (
//     <ul>
//         {props.groceryItems.map( (groceryItem) =>
//             <GroceryListItem groceryItem={groceryItem} />
//             )}
//     </ul>
// );
// ReactDOM.render(<GroceryList groceryItems={['apples', 'burritos', 'mandu']}/>, document.getElementById("app"));