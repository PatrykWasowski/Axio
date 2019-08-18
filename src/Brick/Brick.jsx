import React from 'react';
import { Icons } from '../Icons';

class Brick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            angle: 0
        }
    }

    basicStyle = {
        width: this.props.size + 'px',
        height: this.props.size + 'px',
        margin: 0,
        padding: 0,
        backgroundSize: 'contain'
    }

    determineHalfBrickStyle = (i) => {
        const url = Icons[i].url;
        return {
            ...this.basicStyle,
            backgroundImage: url
        }
    }

    getWholeBrickStyle = () => {
        return {
            height: 2 * this.props.size + 'px',
            width: this.props.size + 'px',
            transform: `rotate(${this.state.angle}deg)`,
            display: 'inline-block',
            margin: '15px'
        }
    }

    brickClickedHandler = () => {
        let newAngle = this.state.angle + 90;
        this.setState({
            angle: newAngle
        })
    }

    render() {
        const usedStyle = this.determineHalfBrickStyle(this.props.firstCell);
        const usedStyle2 = this.determineHalfBrickStyle(this.props.secondCell);
        const brickStyle = this.getWholeBrickStyle();
        return (
            <div style={brickStyle} onClick={this.brickClickedHandler}>
                <div style={usedStyle}></div>
                <div style={usedStyle2}></div>
            </div>
        )
    }
}

export default Brick;