import React, {Component} from 'react';


class chatbar extends Component {

  constructor() {
    super()
    this.state = {text: ''}
  }



  handleTextChange = (e) => {
    this.setState({text: e.target.value})

    if (e.key === 'Enter') {
      this.props.insertMessage(this.state)
    }
  }


  render() { console.log("render chartBar");
  let name =  this.props.userData.name
    return (

      <footer className="chatbar">
        <input className="chatbar-username" placeholder={name} />
        <input
          className="chatbar-message"
          type="text"
          value={this.state.text}
          onKeyPress={this.handleTextChange}
          onChange={this.handleTextChange}
          placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default chatbar;
