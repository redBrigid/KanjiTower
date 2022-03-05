import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Answer(props) {
  const [answer, setAnswer] = useState('click to show answer')
  const index = useSelector(state=>state.quizIndexReducer)

  function showAnswer() {
    setAnswer(props.value.meaning)
  }

  return (
    <div>
      <p onClick={showAnswer}>{props.data[index].meaning}</p>
    </div>
  )
}
