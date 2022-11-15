/**
 * Displaying a random answer in the eight ball
 *
 * Props:
 * - answers
 *
 * State:
 * - color: string
 * - msg: string
 *
 * App -> EightBall
 *
 */

import _ from "underscore";
import React, { useState } from "react";
import "./EightBall.css"

function EightBall({answers}){
  const [color, setColor] = useState("black")
  const [msg, setMsg] = useState("Think of a Question")

  function handleClick(){
    console.log("I was clicked")
    const answer = _.sample(answers, [1])
    setColor(answer[0].color);
    setMsg(answer[0].msg)
  }

  return (
    <div className="EightBall"
      onClick={handleClick}
      style={{"backgroundColor": color}}>
     <p className="msg">{msg}</p>
    </div>
  )
}

export default EightBall;