import React from 'react';
import { Component } from 'react';

class Board extends Component {    
    tableStyle = {
        backgroundColor: '#f8f5ed',
        margin: 'auto',
        marginTop: '100px',
        border: '2px black solid',
        boxShadow: '0px 0px 10px white'
    }
    
    cellStyle = {
        height: this.props.size,
        width: this.props.size,
        border: '2px #43464B solid'
    }
    
    handleCellClick = (e) => {
        alert(e.target.id);
    }
    
    populateTable = () => {
        let rows = [];
        for (let i = 0; i < this.props.dimension; i++) {
            let children = [];
            for (let j = 0; j < this.props.dimension; j++) {
                children.push(<td key={i + " " + j} style={this.cellStyle} onMouseUp={this.handleCellClick}></td>)
            }
            rows.push(<tr key={i}>{children}</tr>)
        }
        return rows;
    }
    
    render() {
        return (
        <div>
            <table id = "board" style={this.tableStyle}>
                <tbody>
                    { this.populateTable() }
                </tbody>
            </table>
        </div>)
    } 
}

export default Board;