import React from "react"

class MouseEvents extends React.Component {
constructor(props){
    super(props)
    this.state={message:"hover or click"}
}

  handleClick=()=>{
    this.setState({message:"button clicked"})
  }

  handleDoubleClick=()=>{
    this.setState({message:"button double clicked"})
  }

  handleMouseDown=()=>{
    this.setState({message:"mouse button is down"})
  }

  handleMouseUp=()=>{
    this.setState({message:"mouse button is up"})
  }

//   handleMouseMove=()=>{
//     this.setState({message:"mouse moving"})
//   }

  handleMoveOver=()=>{
    this.setState({message:"mouse is over the button"})
  }

  handleMouseEnter = () => {
    this.setState({message:'Mouse entered button area!'});
  }

  handleMouseLeave = () => {
    this.setState({message:'Mouse left button area!'});
  }

  render() {
    return (
        <div>
          <h1>{this.state.message}</h1> 
          <button
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleClick}
            onDoubleClick={this.handleDoubleClick}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            // onMouseMove={this.handleMouseMove}
            onMouseOver={this.handleMoveOver}
        >
          Hover and Click Me!
        </button>
      </div>
    );
  }
}

export default MouseEvents