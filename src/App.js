import React from 'react';
import './App.css';
import Board from './Board/Board';
import Brick from './Brick/Brick';

class App extends React.Component {
  defaultSize = 50;
  defaultDimension = 11;
  defaultPlayersNumber = 2;
  
  constructor(props) {
    super(props);
    this.state = {
      size: this.defaultSize,
      dimension: this.defaultDimension,
      playersNumber: this.defaultPlayersNumber
    }
  }
  
  sizeChangeHandler = (e) => {
    this.setState({
      ...this.state,
      size: parseInt(e.target.value)
    });
  }

  dimensionChangeHandler = (e) => {
    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        dimension: parseInt(e.target.value)
      })
    }
  }

  playersNumberChangeHandler = (e) => {
    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        playersNumber: parseInt(e.target.value)
      })
    }
  }

  render() {
    return (
    <div className="App">
      <input type="number" id="playersNumber" min="2" max="4" onChange={this.playersNumberChangeHandler} defaultValue={this.defaultPlayersNumber} />
      <input type="number" id="dimension" min="1" max="20" onChange={this.dimensionChangeHandler} defaultValue={this.defaultDimension} />
      <input type="range" id="size" min="10" max="100" step="2" onChange={this.sizeChangeHandler} defaultValue={this.defaultSize} />
      <Board size={this.state.size} dimension={this.state.dimension} playersNumber={this.state.playersNumber} />
      <br />
      <br />
      <Brick size={this.state.size} />
    </div>
    )
  }
}

export default App;
