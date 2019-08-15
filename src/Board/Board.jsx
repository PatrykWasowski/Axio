import React from 'react';
import './Board.css';

class Board extends React.Component {    
    handleCellClick = (e) => {
        alert(e.target.id);
    }
    
    populateTable = () => {
        const cellStyle = {
            height: this.props.size + 'px',
            width: this.props.size + 'px',
            border: '2px #43464B solid'
        };

        let rows = [];
        for (let i = 0; i < this.props.dimension; i++) {
            let cells = [];
            for (let j = 0; j < this.props.dimension; j++) {
                cells.push(<td id={i + " " + j} key={i+j} style={cellStyle} onMouseUp={this.handleCellClick}></td>)
            }
            rows.push(<tr key={i}>{cells}</tr>)
        }
        console.log(cellStyle);

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