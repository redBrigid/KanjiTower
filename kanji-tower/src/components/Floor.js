import React from 'react'
import Character from './Character'

export default function Floor(props) {
  return (
    <div>
      <p>Floor {props.floorNumber}</p>
      <div>
        {props.floor.map((character,i) => <Character key={i} character={character} />)}
      </div>
    </div>
  )
}
