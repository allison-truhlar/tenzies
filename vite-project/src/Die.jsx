import React from "react"

export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"}

    return(
        <div 
            tabIndex={0}    
            className="die" 
            style={styles} 
            onClick={()=>props.holdDie(props.id)} 
            onKeyDown={(e)=>props.handleKeyDown(e, props.id)} 
        >
            <h1 className="die-face" onKeyDown={(e)=>props.handleKeyDown(e, props.id)}>{props.value}</h1>
        </div>
    )
}