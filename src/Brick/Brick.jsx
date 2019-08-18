import React from 'react';
import { Icons } from '../Icons';

class Brick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstCell: 2,
            secondCell: 4,
            angle: 0
        }
    }

    basicStyle = {
        width: this.props.size + 'px',
        height: this.props.size + 'px',
        backgroundSize: 'contain'
    }

    determineBrickStyle = (i) => {
        const url = Icons[i].url;
        return {
            ...this.basicStyle,
            backgroundImage: url
        }
    }

    brickClickedHandler = () => {
        let newAngle = this.state.angle + 90;
        this.setState({
            ...this.state,
            angle: newAngle
        })
    }

    render() {
        const usedStyle = this.determineBrickStyle(this.state.firstCell);
        const usedStyle2 = this.determineBrickStyle(this.state.secondCell);
        const brickStyle = {
            height: 2 * this.props.size + 'px',
            width: this.props.size + 'px',
            transform: `rotate(${this.state.angle}deg)`
        }
        return (
            <div style={brickStyle} onClick={this.brickClickedHandler}>
                <div style={usedStyle}></div>
                <div style={usedStyle2}></div>
            </div>
        )
    }
}

export default Brick;