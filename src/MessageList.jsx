

import React, {Component} from 'react';

import MessageText from './Message.jsx';


class Message extends Component {


  render() {

    console.log("from messagelist " + this.props.userData);
    let messages;

      messages = this.props.userData.map(
        message => {
         if (message.id === undefined) {

           return <MessageText  messageNotifications={message}/>
         } else {

           return  <MessageText
           key={message.id}
           messageUsername={message.username}
           messageContent={message.content}/>
         }
        }
      );



    return (
      <main className="messages">
          { messages }
      </main>
    );
  }
}

export default Message;
