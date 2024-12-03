import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (num) => {
        if (lock || data[num] !== "") {
            return;
        }
        const currentPlayer = count % 2 === 0 ? "x" : "o";
        data[num] = currentPlayer;
        const icon = currentPlayer === "x" ? cross_icon : circle;
        document.getElementById(`box${num}`).innerHTML = `<img src="${icon}" alt="${currentPlayer}" />`;
        setCount(count + 1);
        checkWin();
    };

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ];
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] !== "" && data[a] === data[b] && data[b] === data[c]) {
                won(data[a]);
                return;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        const winnerIcon = winner === "x" ? cross_icon : circle;
        titleRef.current.innerHTML = `Congratulations! <img src="${winnerIcon}" alt="${winner}" />, wins!!`;
    };

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = 'TicTacToe in <span>React</span>';
        for (let i = 0; i < 9; i++) {
            document.getElementById(`box${i}`).innerHTML = "";
        }
        setCount(0);
    };

    return (
        <div className='container'>
            <h1 className="title" ref={titleRef}>TicTacToe Game in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" id="box0" onClick={() => toggle(0)}></div>
                    <div className="boxes" id="box1" onClick={() => toggle(1)}></div>
                    <div className="boxes" id="box2" onClick={() => toggle(2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" id="box3" onClick={() => toggle(3)}></div>
                    <div className="boxes" id="box4" onClick={() => toggle(4)}></div>
                    <div className="boxes" id="box5" onClick={() => toggle(5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" id="box6" onClick={() => toggle(6)}></div>
                    <div className="boxes" id="box7" onClick={() => toggle(7)}></div>
                    <div className="boxes" id="box8" onClick={() => toggle(8)}></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default TicTacToe;
