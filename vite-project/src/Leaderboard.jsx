import React from "react"

export default function Leaderboard(props){
    
    //Determine the current user's roll count place relative to the top scores
    const userPlace = props.topScores.indexOf(props.rollCount)
    
    //Generate JSX for the leaderboard entries. Includes dynamic styling if the current score is one of the top scores
    const leaderboardEntries = props.topScores.map((score, index) => {
        const placeOrder = ["🥇 1st","🥈 2nd","🥉 3rd"]
        const styles = {
            color: index===userPlace ? "#5035FF" : "#2B283A"
        }
        return(
            <p className="leaderboard-entry" style={styles}key={index}>{placeOrder[index]} place: {score} rolls</p>
        )
    })

    //Leaderboard component
    return(
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Tenzies!</h1>
            <p>Your score: {props.rollCount} rolls</p>
            <h2 className="leaderboard-subtitle">Your Top Scores</h2>
            {leaderboardEntries}
        </div>
    )
}