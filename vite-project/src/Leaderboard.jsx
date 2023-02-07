import React from "react"

export default function Leaderboard(props){
    return(
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">You Won!</h1>
            <h2 className="leaderboard-subtitle">Roll Count Leaderboard</h2>
            <p className="leaderboard-entry">1st - {props.topScores[0]}</p>
            {props.topScores[1] && <p className="leaderboard-entry">2nd - {props.topScores[1]}</p>}
            {props.topScores[2] && <p className="leaderboard-entry">2nd - {props.topScores[2]}</p>}
        </div>
    )
}