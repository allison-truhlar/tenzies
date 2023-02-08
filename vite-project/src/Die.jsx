import React from "react"

export default function Die(props){

    // Dynamic styling to change color for held dice    
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"}

    //Die component JSX. Includes two event handlers - one for click events and one for keydown events. Both ultimately call the holDie function
    return(
        <div 
            tabIndex={0}    
            className="die" 
            style={styles} 
            onClick={()=>props.holdDie(props.id)} 
            onKeyDown={(e)=>props.handleKeyDown(e, props.id)} 
        >
            <h1 className="die-face">{props.value}</h1>
        </div>
    )
}