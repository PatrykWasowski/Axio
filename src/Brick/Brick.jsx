import React from 'react';
import { Icons } from '../Icons';
import Draggable from 'react-draggable';
import { genericTypeAnnotation } from '@babel/types';

class Brick extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            moveable: true
        }
    }

    basicStyle = {
        width: 2+this.props.size + 'px',
        height: 2+this.props.size + 'px',
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
            width: this.props.size-15 + 'px',
            transform: 'rotate(' +  this.state.angle + 'deg)',
            display: 'inline-block',
            margin: '15px',
            color: 'green'
        }
    }

    brickClickedHandler = (event) => {
        if(event.type !== 'contextmenu') {
            return;
        }
        console.log('context');
        event.preventDefault();
        let newAngle = this.state.angle + 90;
        console.log(newAngle);
        this.setState({
            angle: newAngle
        })
    }

    mouseDownHandler = () => {
        if(!this.state.moveable) {
            return;
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