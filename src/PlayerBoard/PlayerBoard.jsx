import React from 'react';
import Brick from '../Brick/Brick';
import './PlayerBoard.css';

class PlayerBoard extends React.Component {
    render() {
        return (
            <div className="playerBoard" >
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} moveBrickHandler={this.props.moveBrickHandler} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} moveBrickHandler={this.props.moveBrickHandler} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} moveBrickHandler={this.props.moveBrickHandler} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} moveBrickHandler={this.props.moveBrickHandler} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} moveBrickHandler={this.props.moveBrickHandler} />
            </div>
        )
    }
}

export default PlayerBoard;