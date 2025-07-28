import React, { useRef, useState } from 'react'
import './tictactoe.css';
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'

let data=["","","","","","","","",""];

const Tictactoe = () => {
  let [count,setCount]=useState(0);
  let [lock,setLock]=useState(false);

  let titleRef=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);

  let boxArr=[box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const toggle= (e,num)=>{
    if(lock){
        return 0;
    }
    if (data[num] !== "") return;

    if(count%2===0){
        e.target.innerHTML= `<img src='${cross}'/>`;
        data[num]="x";
        setCount(++count);
    }
    else{
        e.target.innerHTML= `<img src='${circle}'/>`;
        data[num]="0";
        setCount(++count);
    }
    checkWin();
  }

  const checkWin=()=>{
    // Horizontal rows
if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
    // Top row win
    won(data[2]);
}
if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
    // Middle row win
    won(data[5]);

}
if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
    // Bottom row win
    won(data[8]);

}

// Vertical columns
if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
    // Left column win
    won(data[6]);

}
if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
    // Middle column win
    won(data[7]);

}
if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
    // Right column win
    won(data[8]);

}

// Diagonals
if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
    // Left-top to right-bottom diagonal win
    won(data[8]);

}
if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
    // Right-top to left-bottom diagonal win
    won(data[2]);

}
if (count === 9 && !lock) {
  titleRef.current.innerHTML = `It's a Draw! 🤝`;
}


  }

  const won = (winner) => {
  setLock(true);
  if (winner === "x") {
    titleRef.current.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 8px;">
        🎉 Congratulations! <img src="${cross}" alt="X Wins" style="height: 30px;" /> Wins
      </span>
    `;
  } else {
    titleRef.current.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 8px;">
        🎉 Congratulations! <img src="${circle}" alt="O Wins" style="height: 30px;" /> Wins
      </span>
    `;
  }
}


  function resetBox(){
    setLock(false);
    setCount(0);
    data=["","","","","","","","",""];
    titleRef.current.innerHTML="Tic-Tac-Toe Game in React";
    box1.current.innerHTML="";
    box2.current.innerHTML="";
    box3.current.innerHTML="";
    box4.current.innerHTML="";
    box5.current.innerHTML="";
    box6.current.innerHTML="";
    box7.current.innerHTML="";
    box8.current.innerHTML="";
    box9.current.innerHTML="";
}

  return (
    <div>
      <div className="container">
        <h1 className='Title' ref={titleRef}>Tic-Tac-Toe Game in React</h1>
        
        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <div>
            <button className='reserButton' onClick={resetBox}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Tictactoe
