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

function EightBall({answers}){
  const [color, setColor] = useState("black")
  const [msg, setMsg] = useState("Think of a Question")

  function handleClick(){
    const {color, msg} = _.sample(answers, [1])
    setColor(color);
    setMsg(msg)
  }

  return (
    <div></div>
  )
}

export default EightBall;