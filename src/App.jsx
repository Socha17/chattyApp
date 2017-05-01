
import React, {Component} from 'react';

import Message from './MessageList.jsx';
import Chatbar from './ChatBar.jsx';

class App extends Component {
  render() { console.log("Rendering <App/>");
    return (

      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <Message />
      <Chatbar />
    </div>
    );
  }
}
export default App;
