import React from 'react'
import Tower from './Tower'
import Quiz from './Quiz'
import Navigation from './Navigation'
import { useSelector } from 'react-redux';
import CharacterDetails from './CharacterDetails';


export default function AppBody() {
  let mode = useSelector(state => state.menuReducer)
  console.log('mode: ', mode)
  return (
    <div>
      <Navigation />
      {(mode === 'tower') 
        ? <Tower />
        : (mode === 'quiz') ? <Quiz /> : <CharacterDetails/>}
    </div>
  )
}
