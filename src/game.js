import React, { Component } from 'react';
import './index.css'; 
import GameBoard from './gameBoard';

class Game extends Component {

    state = {
      history:[{squares:Array(9).fill(null)}],
      nextPlayerIsX:true,
      moveNumber:0
    }
    
    handleChange = (currentIndex)=>{
        const history = this.state.history;
        const current = history[history.length-1].squares.slice();
        
        if (this.checkWinner(current) || current[currentIndex]) {
            return;
          }
        
        current[currentIndex] =this.state.nextPlayerIsX ? 'X':'O';
        history.push({squares:current}); 
        this.setState({
          history: history,
          nextPlayerIsX: !this.state.nextPlayerIsX,
          moveNumber:history.length-1
        });      
    }

    //Setting the value of moveNumber and always the nextPlayer Will be x if the moveNumber is even
    jumpTo = (move)=>{
      this.setState({moveNumber:move,nextPlayerIsX:(move%2)===0});
    }
    //Restart the game from the starting
    restart = () =>{
      this.setState({
        history:[{squares:Array(9).fill(null)}],
        nextPlayerIsX:true,
        moveNumber:0
      });
    }
    checkWinner = (squares)=>{
      //Possible winner combinations in game tic-tac-toe
      const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ]
      
      for(let i=0;i<lines.length;i++)
      {
          const[a,b,c] = lines[i];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
              return squares[a];
      }
      return null;
      }

    render() {
      const history = this.state.history.slice();
      const current = history[this.state.moveNumber].squares;
      
      let status;
      const winner = this.checkWinner(current);
        if(winner)
        {
            status = `Winner is ${winner}`;
            window.alert(`Winner is ${winner}`);
        }
        else
            status = this.state.nextPlayerIsX ? 'X' : '0';

        const moves = history.map((step, move) => {
          const display = move ? 'Go to move #' + move : 'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{display}</button>
            </li>
        );});

        return (
        <div className="game">
        <div className="game-board">
          <GameBoard squares = {current} status = {status} click = {(index)=>this.handleChange(index)}/>
          <div className="game-restart">
          <button onClick = {this.restart} >Restart Game</button>
          </div>
         
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        </div>);
    }
}
 
export default Game;