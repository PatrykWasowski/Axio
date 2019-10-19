import React from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);
        const { cells, rows } = this.populateTable();
        this.state = {
            cells: cells,
            rows: rows
        }
        console.log(this.state);
    }

    findCell = (x, y) => {
        console.log("Try to find cell for [" + x + ", " + y + "]");

        for (let i = 0; i < this.state.cells.length; i++) {
            const cell = this.state.cells[i];
            console.log(cell.ref.current.getCellPosition());
            if (Math.abs(cell.ref.current.getCellPosition().x - x) < 20 && Math.abs(cell.ref.current.getCellPosition().y - y) < 20) {
                alert("Eureka! " + cell.ref.current.getCellRowAndCol().row + " " + cell.ref.current.getCellRowAndCol().column);

                return ({ row: cell.ref.current.getCellRowAndCol().row, column: cell.ref.current.getCellRowAndCol().column });
            }
        }
    }

    determineEnable = (i, j, playersNumber) => {
        if ((playersNumber === 2 && (i < 2 || i > 10 || j < 2 || j > 10))
            || (playersNumber === 3 && (i < 1 || i > 11 || j < 1 || j > 11))) {
            return false;
        } else {
            return true;
        }
    }

    getCellPosition = (x, y) => {
        console.log("Cell position: " + x + ", " + y);
    }

    populateTable = () => {
        let rows = [];
        let cells = [];
        const cellSize = this.props.size;

        for (let i = 0; i < this.props.dimension; i++) {
            let currentCells = [];
            for (let j = 0; j < this.props.dimension; j++) {
                const determineEnable = this.determineEnable(i, j, this.props.playersNumber);
                const ref = React.createRef();
                const cell = (
                    <Cell
                        key={"cell" + i + "" + j}
                        row={i}
                        column={j}
                        enabled={determineEnable}
                        size={cellSize}
                        getCellPosition={this.getCellPosition}
                        ref={ref}
                    />);

                currentCells.push(cell);
                cells.push({ cell, ref });
            }
            rows.push(<tr key={i}>{currentCells}</tr>)
        }

        return { cells, rows };
    }

    render() {
        return (
            <div className="board">
                <table id="board">
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>
            </div>)
    }
}

export default Board;