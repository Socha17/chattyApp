
import React, {Component} from 'react';

import Message from './MessageList.jsx';
import Chatbar from './ChatBar.jsx';


const userData = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {userData: userData};
  }


  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({userData: userData})  // change the state. this calls render() and the component updates.
  //   }, 1000)
  // }

  render() {

      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <Message userData={this.state.userData.messages}/>
          <Chatbar  userData={this.state.userData}/>
        </div>
      );

  }
}


export default App;
