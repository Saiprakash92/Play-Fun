import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'
function Dashboard() {
    const [text ,setText]=useState(Array(9).fill(''));
    const [turn,setTurn]=useState(false);
    const [gameOver,setGameOver]=useState(false);
    const handleClick=(index)=>{
        let newA=[...text]
        newA[index]=turn?'X':'O'
        setText(newA)
        setTurn(!turn)
    }
    useEffect(()=>{
        checkGameOver()
    },[text])
    const checkGameOver=()=>{
        if (
            (text[0] === text[1] && text[1] === text[2] &&text[0]!=='') ||
            (text[3] === text[4] && text[4] === text[5] &&text[3]!=='') ||
            (text[6] === text[7] && text[7] === text[8] &&text[6]!=='') ||
            (text[0] === text[3] && text[3] === text[6] &&text[0]!=='') ||
            (text[1] === text[4] && text[4] === text[7] &&text[1]!=='') ||
            (text[2] === text[5] && text[5] === text[8] &&text[2]!=='') ||
            (text[0] === text[4] && text[4] === text[8] &&text[0]!=='') ||
            (text[2] === text[4] && text[4] === text[6] &&text[2]!=='')
          ) {
           setGameOver(true)
          }
    }
    const StartNewGame=()=>{
         setText(Array(9).fill(''))
        setGameOver(false)
    }
  return (
    <div>
      <div className='board'>
       {
        text.map((item,index)=>{
           return <div className='box' key={index} onClick={()=>{handleClick(index)}}
           style={{ pointerEvents:gameOver ? 'none' : 'auto' }}>{item}</div>
        })
       }
    
      </div>
      <div>
        {gameOver&&<><h1>Game Over</h1>
        <button onClick={StartNewGame}>NewGame</button></>
        }
      </div>
    </div>
  )
}

export default Dashboard
