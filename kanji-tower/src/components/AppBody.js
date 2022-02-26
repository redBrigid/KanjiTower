import React from 'react'
import Tower from './Tower'
import Quiz from './Quiz'
import Navigation from './Navigation'
import { useSelector } from 'react-redux';


export default function AppBody() {
    let mode = useSelector(state=>state.menuReducer)
   
  return (
    <div>
       <Navigation/>
         {(mode === 'tower')?<Tower/>
      :(mode === 'quiz')?<Quiz/>:''}
    </div>
  )
}
