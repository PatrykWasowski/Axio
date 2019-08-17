import React from 'react';
import './Board.css';

class Board extends React.Component {    
    handleCellClick = (e) => {
        alert(e.target.id);
    }

    determineCellStyle = (i, j) => {
        const enabledCellStyle = {
            height: this.props.size + 'px',
            width: this.props.size + 'px',
            border: '2px #43464B solid'
        };

        const disabledCellStyle = {
            ...enabledCellStyle,
            backgroundColor: '#c0c0c0'
        }

        if((this.props.playersNumber === 2 && (i < 2 || i > 8 || j < 2 || j > 8))
                || (this.props.playersNumber === 3 && (i < 1 || i > 9 || j < 1 || j > 9))) {
            return disabledCellStyle;
        } else {
            return enabledCellStyle;
        }
    }
    
    populateTable = () => {
        let rows = [];
        for (let i = 0; i < this.props.dimension; i++) {
            let cells = [];
            for (let j = 0; j < this.props.dimension; j++) {
                const usedCellStyle = this.determineCellStyle(i, j);

                cells.push(<td id={i + " " + j} key={i+j} style={usedCellStyle} onMouseUp={this.handleCellClick}></td>);
            }
            rows.push(<tr key={i}>{cells}</tr>)
        }

        return rows;
    }

    render() {
        return (
        <div>
            <table id = "board">
                <tbody>
                    { this.populateTable() }
                </tbody>
            </table>
        </div>)
    } 
}

export default Board;