import React from 'react';
import './App.css';
import Board from './Board/Board';
import PlayerBoard from './PlayerBoard/PlayerBoard';
import ScoreTable from './ScoreTable/ScoreTable'

class App extends React.Component {
  defaultSize = 55;
  defaultDimension = 13;
  defaultPlayersNumber = 2;

  constructor(props) {
    super(props);
    this.state = {
      size: this.defaultSize,
      dimension: this.defaultDimension,
      playersNumber: this.defaultPlayersNumber
    }
    this.board = React.createRef();
  }

  sizeChangeHandler = (e) => {
    this.setState({
      size: parseInt(e.target.value)
    });
  }

  dimensionChangeHandler = (e) => {
    if (e.target.value !== "") {
      this.setState({
        dimension: parseInt(e.target.value)
      })
    }
  }

  playersNumberChangeHandler = (e) => {
    if (e.target.value !== "") {
      this.setState({
        playersNumber: parseInt(e.target.value)
      })
    }
  }

  inlineBlockStyle = {
    display: 'inline-block'
  }

  moveBrickHandler = (x, y, color1, color2, angle) => {
    console.log("Try to find cell with x = " + x + " and y = " + y + " with shapes: " + color1 + " & " + color2 + " and angle = " + angle);
    const foundCell = this.board.current.findCell(x, y);
  }

  findCell= (row, col) => {
    console.log("Brick is in cell = [" + row + ", " + col + "]");
  }

  render() {
    return (
      <div className="App">
        {/* <input type="number" id="playersNumber" min="2" max="4" onChange={this.playersNumberChangeHandler} defaultValue={this.defaultPlayersNumber} />
      <input type="number" id="dimension" min="1" max="20" onChange={this.dimensionChangeHandler} defaultValue={this.defaultDimension} />
      <input type="range" id="size" min="10" max="100" step="2" onChange={this.sizeChangeHandler} defaultValue={this.defaultSize} /> */}
        <Board
          size={this.state.size}
          dimension={this.state.dimension}
          playersNumber={this.state.playersNumber} 
          findCell={this.findCell}
          ref={this.board}
          />
        <br />
        <br />
        <div>
          <ScoreTable scores={[1, 2, 3, 4, 5]} />
          <PlayerBoard
            key={"playerboard"}
            brickSize={this.state.size}
            moveBrickHandler={this.moveBrickHandler}
          />
        </div>
      </div>
    )
  }
}

export default App;
