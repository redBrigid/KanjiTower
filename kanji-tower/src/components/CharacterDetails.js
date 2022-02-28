import React from 'react'
import { useSelector } from 'react-redux'

export default function CharacterDetails() {
    const info = useSelector(state=>state.menuReducer);
    console.log('info',info.payload)
    return (
    <div>Details of: {info} - how to get access to payload?!!

    </div>
  )
}
