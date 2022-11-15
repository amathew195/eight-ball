import _ from "underscore";
import React, { useState } from "react";
import "./EightBall.css";

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/**
 * Displaying a random answer in the eight ball
 *
 * Props:
 * - answers: array of objects
 *
 * State:
 * - color: string
 * - msg: string
 *
 * App -> EightBall
 *
 */

function EightBall({ answers = ANSWERS }) {
  // const [color, setColor] = useState("black");
  // const [msg, setMsg] = useState("Think of a Question");

  const [answer, setAnswer] = useState({
    color: "black",
    msg: "think of a question"
  });

  function handleClick() {
    const randomAnswer = _.sample(answers, [1]);
    // setColor(answer[0].color);
    // setMsg(answer[0].msg);
    setAnswer(randomAnswer[0]);
  }

  function reset(){
    const resetAnswer = {
      color: "black",
      msg: "think of a question"
    }
    setAnswer(resetAnswer)
  }

  return (
    <div>
      <div className="EightBall"
        onClick={handleClick}
        style={{ "backgroundColor": answer.color }}>
        <p className="msg">{answer.msg}</p>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default EightBall;