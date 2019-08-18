import React from 'react';
import Brick from '../Brick/Brick';

class PlayerBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    playerBoardStyle = {
        margin: '10px auto',
        display: 'inline-block'
    }

    render() {
        return (
            <div>
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} />
                <Brick size={this.props.brickSize} firstCell={Math.round(Math.random() * 4)} secondCell={Math.round(Math.random() * 4)} />
            </div>
        )
    }
}

export default PlayerBoard;