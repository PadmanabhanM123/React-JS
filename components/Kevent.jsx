import React from 'react'

class Kevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Type in the input box!',
      key: '',
    };
  }

  handleKeyDown = (event) => {
    this.setState({ 
      message: 'Key down event detected!',
      key: event.key,
    });
  }

//   handleKeyPress = (event) => {
//     this.setState({ 
//       message: 'Key press event detected!',
//       key: event.key,
//     });
//   }

  handleKeyUp = (event) => {
    this.setState({ 
      message: 'Key up event detected!',
      key: event.key,
    });
  }

  render() {
    const { message, key, keyCode } = this.state;
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{message}</h1>
        <p>Key: {key}</p>
        <input
          type="text"
          onKeyDown={this.handleKeyDown}
        //   onKeyPress={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
          style={{ padding: '10px', fontSize: '16px' }}
          placeholder="Type something..."
        />
      </div>
    );
  }
}



export default Kevent