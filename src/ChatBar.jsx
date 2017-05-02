import React, {Component} from 'react';


class chatbar extends Component {

  render() { console.log("render chartBar");
  let name = this.props.userData.currentUser.name
    return (

      <footer className="chatbar">
        <input className="chatbar-username" placeholder={name} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default chatbar;
