import React from 'react';
import './App.css';
import Board from './Board/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 60,
      dimension: 9
    }
  }
  
  sizeChangeHandler = (e) => {
    this.setState({
      ...this.state,
      size: e.target.value
    });
  }

  dimensionChangeHandler = (e) => {
    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        dimension: e.target.value
      })
    }
  }


  render() {
    return (
    <div className="App">
      <input type="number" id="dimension" min="1" max="20" onChange={this.dimensionChangeHandler} defaultValue="9" />
      <input type="range" id="size" min="10" max="100" step="2" onChange={this.sizeChangeHandler} defaultValue="60" />
      <Board size={this.state.size} dimension={this.state.dimension} />
    </div>
    )
  }
}

export default App;
