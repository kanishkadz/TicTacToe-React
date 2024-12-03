import React from 'react'
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

function TicTacToe() {
  return (
    <div className='container'>
        <h1 className="title">TicTacToe Game in <span>React</span></h1>
        <div className="board">

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe