import React from "react"
import { nanoid } from 'nanoid'
import Confetti from "./Confetti"
import Die from "./Die"
import Leaderboard from "./Leaderboard"

export default function App() {
  
  // Declare state
  const [dice, setDice] = React.useState(rollAllDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollCount, setRollCount] = React.useState(0)
  const [topScores, setTopScores] = React.useState(
    ()=>JSON.parse(localStorage.getItem("topScores")) || []
  )
  
  // useEffect that runs on every change to dice state
  // When all dice are held and all dice values are equal, sets:
  // Tenzies to true. topScores to include the new roll count, if there are less than 3 current entries and the new roll count is less than the existing 3 entries
  // Stores topScores in local storage
  React.useEffect(() => {
    const firstDieValue = dice[0].value
    
    if(dice.every(die => die.isHeld === true && die.value === firstDieValue)){
    
      setTenzies(true)

      setTopScores(prevScores => {
        let newTopScores = [...prevScores, rollCount].sort(function(a, b){return a-b})
        console.log(newTopScores)
        if (newTopScores.length > 3){
          newTopScores.slice(0,3)
        }
        return newTopScores
      })
      
      localStorage.setItem("topScores", JSON.stringify(topScores))
      
    }
  },[dice])

  // Helper function to return a single die 
  function rollSingleDie(){
    return (
      {
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
       }
    )
  }

  // Function to roll all 10 dice. Used to initialize dice state.
  function rollAllDice(){
    const allDiceArray=[]
    for(let i=0; i<10; i++){ 
        allDiceArray.push(rollSingleDie())
    }
    return allDiceArray
  }

  // Function to (1) roll only dice that aren't held and increase rollCount;
  // (2) when tenzies is true, calls resetGame
  function rollSomeDice(){
    if(tenzies){
      resetGame()
    } else{
      setRollCount(oldCount => oldCount + 1)
      setDice(oldDice => oldDice.map(die => {
        if(!die.isHeld){
          return rollSingleDie()
        } else{
          return die
        }
      }))
    }
  }

  // Reset state values for new game
  function resetGame(){
    setDice(rollAllDice())
    setTenzies(false)
    setRollCount(0)
  }

  // Function to hold and unhold dice
  function holdDie(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  //Function to handle key down events - passes die id to holDie if the key is not tab  
  function handleKeyDown(e, id){
    if (e.keyCode != 9){
      holdDie(id)
    }
  }

  //Function to map over dice state and create JSX
  const diceElements = dice.map(die => {
    return (
      <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        id={die.id} 
        holdDie={holdDie}
        handleKeyDown={handleKeyDown}
      />)
  })
  
  // App JSX
  return (
    <main>
      {tenzies && <Confetti />}
      <div className="app-background">
        <div className="app-content-container">
          {tenzies && <Leaderboard rollCount={rollCount} topScores={topScores}/>}
          <div className="app-header-container">
            <h1 className="app-title">Tenzies</h1>
            <p className="app-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="dice-container">
            {diceElements}
          </div>
          <button className="main-btn" onClick={rollSomeDice}>
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </div>
    </main>
  )
}
