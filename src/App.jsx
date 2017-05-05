
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
    let exampleSocket = new WebSocket("ws://localhost:3001");
    this.socket = exampleSocket;

    this.state = {
      currentUser: {name: "Bob"},
      messages: [], // messages coming from the server will be stored here as they arrive
      users: []
    };

    console.log(this.state);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({userData: userData})  // change the state. this calls render() and the component updates.
  //   }, 1000)
  // }

  insertName = (name) => {
    let getOldUsername = this.state.currentUser.name
    let newName = {name: name.text}

    this.setState({currentUser: newName})

    const postToServer = {type: "postNotification", content: `${getOldUsername} has changed their name to ${newName.name}.`};
    this.socket.send(JSON.stringify(postToServer));
  }

  insertMessage = (text) => {
    let length = this.state.messages.length + 1;
    let getCurrentUser = this.state.currentUser.name

    const newMessage = {id: length, username: getCurrentUser, content: text.text};
    const messages = this.state.messages.concat(newMessage);

    this.setState({messages: messages})
    newMessage.type = "postMessage"
    this.socket.send(JSON.stringify(newMessage));
  }


  handleNewMessage = (allData) => {

    let newData = JSON.parse(allData.data);

    if (newData.type === "postNotification") {

      console.log("this is a postNotification from the server");
      const insertPop = this.state.messages.concat(newData.content)

      this.setState({messages: insertPop});
      console.log(this.state);


    } else if (newData.type === "incommingMessage") {
      const insertMessage = this.state.messages.concat(newData)
      this.setState({messages: insertMessage});
    }

      let userCount = newData.length
      let userTotal = newData[userCount - 1]

      const insertUsers = userTotal;

      if (insertUsers != undefined) {
        this.setState({users: insertUsers});
        console.log(this.state);
      }


  }

  componentDidMount() {

    if (this.socket) {
      console.log("connected to server");
    }

    this.socket.onmessage = this.handleNewMessage

    console.log("componentDidMount <App />");
    setTimeout(() => {
      let length2 = this.state.messages.length + 1;
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: length2, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }


  render() {

      return (
        <div>
          <nav userData={this.state.users} className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <span className="usersCount">{this.state.users} Users Online</span>
          </nav>
          <Message userData={this.state.messages}/>
          <Chatbar  userData={this.state.currentUser} insertMessage={this.insertMessage} insertName={this.insertName}/>
        </div>
      );

  }
}


export default App;
