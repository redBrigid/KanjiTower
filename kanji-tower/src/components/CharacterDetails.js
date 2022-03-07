import React from 'react'
import { useSelector } from 'react-redux'

export default function CharacterDetails() {
  const info = useSelector(state => state.menuReducer);
  return (
    <section className='character-details'>
      
      <p>{info.payload.kanji}</p>
      <p>{info.payload.meaning}</p>

    </section>
  )
}
