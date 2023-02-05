import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'

export default function App() {
  
  const [dice, setDice] = React.useState(rollAllDice())
  
  function rollAllDice(){
    const allDiceArray=[]
    for(let i=0; i<10; i++){ 
        allDiceArray.push({
          value: Math.ceil(Math.random()*6),
          isHeld: false,
          id: nanoid()})
    }
    return allDiceArray
  }

  function rollDice(){
    setDice(rollAllDice())
  }

  const diceElements = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} />
  })
  
  return (
    <main>
      <div className="app-container">
        <div className="app-header-container">
          <h1 className="app-title">Tenzies</h1>
          <p className="app-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="main-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  )
}
