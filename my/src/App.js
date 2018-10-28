import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {log : false};
    this.changeState = this.changeState.bind(this);
  }
changeState() {
  this.setState(state=>({log : !state.log}));
}
changeColour(){
  var color=document.getElementById("myText").value;
  document.getElementById('color').style.color = color;
}
  render() {
    let x;
    if(this.state.log){
      x=true
    }
    else{
      x=false
    }
    return (
    <div>
    <button onClick={this.changeState}>display</button>
    {x>0 && (<p> <p><label id ="color">This is my first react app</label></p>
                <input type = "text"
                       id = "myText"
                       placeholder = "color"/>
      <button onClick={this.changeColour}>colour</button></p> )}
</div>
  );
  }
}

export default App;
