
import React, {Component} from 'react';


class MessageText extends Component {
  render() {

    return (

      <div>
          <div className="message">
            <span className="message-username">{this.props.messageUsername}</span>
            <span className="message-content">{this.props.messageContent}</span>
          </div>
          <div className="message system">
            <span>{this.props.messageNotifications}</span>
          </div>
      </div>

    );
  }
}

export default MessageText;
