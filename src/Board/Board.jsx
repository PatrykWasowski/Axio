import React from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends React.Component {    
    handleCellClick = (e) => {
        alert(e.target.id);
    }

    determineEnable = (i, j, playersNumber) => {
        if((playersNumber === 2 && (i < 2 || i > 8 || j < 2 || j > 8))
                || (playersNumber === 3 && (i < 1 || i > 9 || j < 1 || j > 9))) {
            return false;
        } else {
            return true;
        }
    }
    
    populateTable = () => {
        let rows = [];
        const cellSize = this.props.size;
        for (let i = 0; i < this.props.dimension; i++) {
            let cells = [];
            for (let j = 0; j < this.props.dimension; j++) {
                const determineEnable = this.determineEnable(i, j, this.props.playersNumber);
                cells.push(<Cell key={i + j} row={i} column={j} enabled={determineEnable} size={cellSize} onClick={this.handleCellClick} />);
            }
            rows.push(<tr key={i}>{cells}</tr>)
        }

        return rows;
    }

    render() {
        return (
        <div className="board">
            <table id = "board">
                <tbody>
                    { this.populateTable() }
                </tbody>
            </table>
        </div>)
    } 
}

export default Board;