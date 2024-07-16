function Condition3(props) {
    return (
      <div>
        {props.isLoggedIn && <h2>Hii {props.username}</h2>}
        {!props.isLoggedIn && <h2>Sorry {props.username}</h2>}
      </div>
    );
  }
  
  export default Condition3;
  