import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quizModeAnswer, quizModeQuestion, updateIndex } from '../actions';
import rawData from '../data.json'
import Answer from './Answer';
import Question from './Question';

export default function Quiz() {
  const mode = useSelector(state=>state.quizModeReducer);
  const index = useSelector(state=>state.quizIndexReducer);
  const dispatch = useDispatch();
  
  console.log(index)

  return (
    <div>
      <p>Quiz</p>
      {
      mode.state==='question'
      ?<Question/>
      :<Answer/>
      }
      <button onClick={()=>dispatch(updateIndex())}>test</button>
      <button onClick={()=>dispatch(quizModeQuestion())}>q</button>
      <button onClick={()=>dispatch(quizModeAnswer())}>a</button>
    </div>
  )



  //I'm not sure yet from where I'm going to take payload, for now I still don't filter it so I'll just take JSON directly

  // let data = rawData;
  // let index = 0;
  // let mode = 'question';
  // const plusButton = ()=>{

  // }
  // const minusButton = ()=>{

  // }

  // return (
  //   <div>
  //     <p>Quiz</p>
  //     {
  //     mode==='question'
  //     ?<Question data={rawData[0].kanji}/>
  //     :<Answer data={rawData[0].meaning}/>
  //     }
  //   </div>
  // )
}
