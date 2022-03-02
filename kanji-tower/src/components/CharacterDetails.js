import React from 'react'
import { useSelector } from 'react-redux'

export default function CharacterDetails() {
  const info = useSelector(state => state.menuReducer);
  return (
    <div>
      Details of: {info.state},
      payload: {JSON.stringify(info.payload)}
    </div>
  )
}
