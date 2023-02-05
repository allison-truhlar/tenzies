import React from "react"

export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"}

    return(
        <div className="die" style={styles} onClick={props.holdDie}>
            <h1 className="die-face">{props.value}</h1>
        </div>
    )
}