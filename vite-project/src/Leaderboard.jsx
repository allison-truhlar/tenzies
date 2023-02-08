import React from "react"

export default function Leaderboard(props){
    const userPlace = props.topScores.indexOf(props.rollCount)
    console.log(props.rollCount)
    console.log(props.topScores)
    console.log(userPlace)
    
    const leaderboardEntries = props.topScores.map((score, index) => {
        const placeOrder = ["🥇 1st","🥈 2nd","🥉 3rd"]
        const styles = {
            color: index===userPlace ? "red" : "#2B283A"
        }
        return(
            <p className="leaderboard-entry" style={styles}key={index}>{placeOrder[index]} place: {score} rolls</p>
        )
    })


    return(
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Tenzies!</h1>
            <h2 className="leaderboard-subtitle">Roll Count Leaderboard</h2>
            {leaderboardEntries}
        </div>
    )
}