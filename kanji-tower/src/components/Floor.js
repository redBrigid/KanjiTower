import React from 'react'
import Character from './Character'

export default function Floor(props) {
  return (
    <div className='floor flex-item-full'>
       <p>Floor {props.floorNumber}</p>
      <div className='floor flex-container'>
       
        <div className='flex-item-margin'></div>
        <div className='flex-item-characters'>
          {props.floor.map((character,i) => <Character key={i} character={character} />)}
        </div>
        <div className='flex-item-margin'></div>
      </div>
    </div>
  )
}
