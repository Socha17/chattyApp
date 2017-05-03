

import React, {Component} from 'react';

import MessageText from './Message.jsx';


class Message extends Component {


  render() {  console.log("render messageList");

    let messages;

    messages = this.props.userData.map(
      message => <MessageText
        key={message.id}
        messageUsername={message.username}
        messageContent={message.content}/>
    );

    return (
      <main className="messages">
          { messages }
      </main>
    );
  }
}

export default Message;
