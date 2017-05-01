

import React, {Component} from 'react';

import Messagetext from './Message.jsx';


class Message extends Component {
  render() { console.log("Rendering <MessageList/>");
    return (

  <main className="messages">
    <Messagetext />
  </main>

    );
  }
}

export default Message;
