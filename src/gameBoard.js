import React, { Component } from 'react';   
import Square from './square'
import './index.css';

class GameBoard extends Component {

    renderSquare(index)
    {
        return <Square index = {index} click = {()=>this.props.click(index)} value ={this.props.squares[index]}/>
    }

    render() {
        const {status} = this.props;
        return (
        <React.Fragment>
            <div className="status">Next player: {status}</div>
            <div className = "board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div> 
            <div className = "board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div> 
            <div className = "board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div> 
        </React.Fragment>
        
    );
    }
}
export default GameBoard;