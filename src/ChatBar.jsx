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
      e.target.value = '';
    }
  }

  handleNameChange = (e) => {
    this.setState({text: e.target.value})

    if (e.key === 'Enter') {
      this.props.insertName(this.state)
      e.target.value = '';
    }
  }

  render() { console.log("render chartBar");
  let name =  this.props.userData.name
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={name} onKeyPress={this.handleNameChange} />
        <input
          className="chatbar-message"
          onKeyPress={this.handleTextChange}
          onChange={this.handleTextChange}
          placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default chatbar;
