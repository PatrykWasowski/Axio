import React from 'react';
import { Icons } from '../Icons';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: this.props.enabled,
            size: this.props.size
        }
    }

    determineStyle = () => {
        const enabledCellStyle = {
            height: this.props.size + 'px',
            width: this.props.size + 'px',
            outline: '2px #43464B solid',
            padding: 0
        };

        const disabledCellStyle = {
            ...enabledCellStyle,
            backgroundColor: '#c0c0c0'
        }

        const occupiedStyle = {
            ...enabledCellStyle,
            backgroundSize: 'contain'
        }

        const row = this.props.row;
        const column = this.props.column;

        if(row === 6 && column === 6) {
            return {
                ...occupiedStyle,
                backgroundImage: Icons[0].url
            }
        }

        if(row === 2 && column === 6) {
            return {
                ...occupiedStyle,
                backgroundImage: Icons[1].url
            }
        }

        if(row === 10 && column === 6) {
            return {
                ...occupiedStyle,
                backgroundImage: Icons[2].url
            }
        }

        if(row === 6 && column === 2) {
            return {
                ...occupiedStyle,
                backgroundImage: Icons[3].url
            }
        }

        if(row === 6 && column === 10) {
            return {
                ...occupiedStyle,
                backgroundImage: Icons[4].url 
            }
        }


        if(this.props.enabled === true) {
            return enabledCellStyle; 
        } else {
            return disabledCellStyle;
        }
    }
    
    render() {
        console.log(this.state);
        const usedCellStyle = this.determineStyle();
        return (<td id={this.props.row + " " + this.props.column} key={this.props.row+this.props.column} style={usedCellStyle} onMouseUp={this.handleCellClick} onClick={this.props.onClick}></td>)
    }
}

export default Cell;