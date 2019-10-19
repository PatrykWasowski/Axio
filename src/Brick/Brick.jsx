import React from 'react';
import ReactDOM from 'react-dom';
import { Icons } from '../Icons';
import Draggable from 'react-draggable';

class Brick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            moveable: true
        }
    }

    basicStyle = {
        width: 2 + this.props.size + 'px',
        height: 2 + this.props.size + 'px',
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
            width: this.props.size - 15 + 'px',
            transform: 'rotate(' + this.state.angle + 'deg)',
            display: 'inline-block',
            color: 'green'
        }
    }

    brickClickedHandler = (event) => {
        if (event.type !== 'contextmenu') {
            return;
        }
        event.preventDefault();
        let newAngle = this.state.angle + 90;
        this.setState({
            angle: newAngle
        })
    }

    mouseDownHandler = () => {
        if (!this.state.moveable) {
            return;
        }
    }

    mouseUpHandler = () => {
        const boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        const x = boundingRect.x + this.findAdjustmentForX(this.state.angle);
        const y = boundingRect.y + this.findAdjustmentForY(this.state.angle);
        this.props.moveBrickHandler(x, y, this.props.firstCell, this.props.secondCell, this.state.angle);
    }

    findAdjustmentForX = (angle) => {
        if(angle % 360 === 0) {
            return 0;
        } else if ((angle - 90) % 360 === 0) {
            return -36;
        } else if ((angle - 180) % 360 === 0) {
            return -18;
        } else if ((angle - 270) % 360 === 0) {
            return -36;
        }
    }

    findAdjustmentForY = (angle) => {
        if(angle % 360 === 0) {
            return 0;
        } else if ((angle - 90) % 360 === 0) {
            return 36;
        } else if ((angle - 180) % 360 === 0) {
            return 0;
        } else if ((angle - 270) % 360 === 0) {
            return 20;
        }
    }

    render() {
        const usedStyle = this.determineHalfBrickStyle(this.props.firstCell);
        const usedStyle2 = this.determineHalfBrickStyle(this.props.secondCell);
        const brickStyle = this.getWholeBrickStyle();
        return (
            <Draggable>
                <div style={brickStyle}>
                    <div
                        style={brickStyle}
                        onClick={this.brickClickedHandler}
                        onContextMenu={this.brickClickedHandler}
                        onMouseDown={this.mouseDownHandler}
                        onMouseUp={this.mouseUpHandler}
                    >
                        <div style={usedStyle}></div>
                        <div style={usedStyle2}></div>
                    </div>
                </div>
            </Draggable>
        )
    }
}

export default Brick;