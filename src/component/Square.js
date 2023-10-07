import React from 'react'
import './TicTacToe.css'
const Square = ({ value, onSquareClick }) => {

    return (
        <div className="boxes" onClick={onSquareClick}>{value}</div>
    )
}

export default Square