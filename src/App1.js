import React, { Component } from 'react';
import './App.css';

class App extends Component {
    handleClick(){
        fetch('http://localhost:8888',{
            method:"GET",
        }).then(function(res){
            return res.json()
        }).then(function(result){
            console.log(result)
        })
    }
    render() {

    return (
      <div className="App">
          <button onClick={()=>{this.handleClick()}}>click</button>
      </div>
    );
  }
}

export default App;
