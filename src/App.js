import React from 'react';
import './App.css';
import Board from './Board/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 20,
      dimension: 9
    }
  }
  
  sizeChangeHandler = (e) => {
    this.setState({
      ...this.state,
      size: e.target.value
    });

    
    console.log(this.state);
  }

  dimensionChangeHandler = (e) => {
    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        dimension: e.target.value
      })
    }
    console.log(this.state);
  }


  render() {
    return (
    <div className="App">
      <Board size={this.state.size} dimension={this.state.dimension} />
      <input type="number" min="1" max="20" id="dimension" onChange={this.dimensionChangeHandler} defaultValue="9"/>
      <input type="range" id="size" min="10" max="100" step="5" onChange={this.sizeChangeHandler}/>
    </div>
    )
  }
}

export default App;
