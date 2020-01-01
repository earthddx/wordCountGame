import React from "react"
import useWordGame from "./useWordGame"

function App() {
    const {
        result, 
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(5)
    
    
    return (
        <div className="game">
            <h1>Word Typing Game</h1>
            <h4>How fast do you type?</h4>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h3>Time remaining: {timeRemaining}</h3>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1> 
            <h4>previous result: {result} </h4>

            <h3 className="watermark">React App.</h3>
        </div>
    )
}

export default App
