import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';

class App extends Component {

  state = {
    userA: {
      firstName: "Hien Vo",
      avatarUrl: "https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Funny-Laughing-Joke-Fun-Haha-Avatar-Man-512.png",

    },
    userB: {
      firstName: "Hanh Than",
      avatarUrl: "https://i.pinimg.com/736x/c9/eb/6a/c9eb6accbdf08a5a054460b9d25bda24--cute-cartoon-girl-avatar.jpg"
    },
    clickCount: 0,
    backColor: 'yellow',
  };


  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    if (this.state.clickCount % 5 === 0) {

      this.setState({
        backColor: this.colorMapper(),
        clickCount: this.state.clickCount + 1
      })

    } else {

      this.setState({
        clickCount: this.state.clickCount + 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        
        <Navbar />
        
        <h1>React - state</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={() => { this.clickHandler(1) }}> Click me </button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
        />
      </div>
    );
  }
}

export default App;