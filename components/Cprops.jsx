//Class
import React, {Component} from "react"
class Cprops extends Component{
    render(){
             return(
                 <div>
                    <h3>Emp name: {this.props.name}</h3>
                    <h3>Emp ID: {this.props.id}</h3>
                    <h3>Emp Age: {this.props.age}</h3>
                  </div>
    )
  }
}
export default Cprops