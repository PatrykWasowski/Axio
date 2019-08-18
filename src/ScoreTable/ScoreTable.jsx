import React from 'react';
import { Icons } from '../Icons';

class ScoreTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: this.props.scores
        }
    }
    
    tableStyle = {
        backgroundColor: 'white'
    }

    render() {
        return (
            <div className="scoreBoard">
                <table style={this.tableStyle}>
                    <ScoreRow symbol="-1" />
                    <ScoreRow symbol="1" score={this.state.scores[1]} />
                    <ScoreRow symbol="4" score={this.state.scores[4]} />
                    <ScoreRow symbol="0" score={this.state.scores[0]} />
                    <ScoreRow symbol="2" score={this.state.scores[2]} />
                    <ScoreRow symbol="3" score={this.state.scores[3]} />
                </table>
            </div>
        )
    }
}

class ScoreRow extends React.Component {
    commonRowStyle = {
        width: '29px',
        height: '29px',
        padding: 0,
        margin: 0,
        textAlign: 'center',
        outline: 'solid 1px black'
    }
    
    firstRowStyle = {
        ...this.commonRowStyle,
        backgroundColor: 'white'
    }
    
    getFirstRow = () => {
        let cells = [];
        for(var i = 0; i < 19; i++) {
            let cell = <td key={"score" + this.props.symbol + i} style={this.firstRowStyle}>{i}</td>
            cells.push(cell);
        }
        return cells;
    }

    getScoreRowStyle = (column) => {
        if(column === 0) {
            return {
                ...this.commonRowStyle,
                backgroundImage: Icons[this.props.symbol].url,
                backgroundSize: 'contain'
            }
        } else {
            let opacity = 0.3;
            if (column > 10) {
                opacity = 0.45;
            } 
            if(column === 18) {
                opacity = 0.7;
            }

            let rgba = this.convertHexToRgba(Icons[this.props.symbol].color, opacity);
            return {
                ...this.commonRowStyle,
                backgroundColor: rgba
            }
        }
    }

    convertHexToRgba = (hex, opacity) => {
        const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

        if (opacity) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    putDieIfMatchesScore = (column) => {
        if(this.props.score === column) {
            const dieStyle = {
                height: '19px',
                width: '19px',
                backgroundColor: Icons[this.props.symbol].color,
                borderRadius: '3px',
                boxShadow: '1px 1px 1px white',
                margin: 'auto',
                transform: `rotate(${this.props.symbol * 50}deg)`
            }
            return <div style={dieStyle}></div>
        }
        return null;
    }

    getScoreRow = () => {
        let cells = [];
        for(var i = 0; i < 19; i++) {
            let cell = <td key={"score" + this.props.symbol + i} style={this.getScoreRowStyle(i)}>{parseInt(this.props.symbol) >= 0 ? this.putDieIfMatchesScore(i) : i}</td>
            cells.push(cell);
        }
        return cells;
    }

    getRow = () => {
        if(parseInt(this.props.symbol) < 0) {
            return this.getFirstRow();
        } else {
            return this.getScoreRow();
        }
    }

    render() {
        return (
            <tr>
                { this.getRow() }
            </tr>
        )
    }
}

export default ScoreTable;