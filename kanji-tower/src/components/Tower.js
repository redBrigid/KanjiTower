import React from 'react'
import Floor from './Floor';
import data from '../data.json'

export default function Tower() {
    return (
        <div className='tower'>Tower
            <div className='flex-container-tower'>
                {data.floorList.map((floor, i,) => <Floor key={i} floor={floor} floorNumber={i+1}/> )}
            </div>
        </div>
    )
}
