import React from 'react'
import Floor from './Floor';
import data from '../data.json'
import Character from './Character';

export default function Tower() {
    return (

        <div className='tower'><span>Tower</span>

            <div className='flex-container-tower'>
                {data.floorList.map((item, i,) => <Character key={i} character={item} />)}
            </div>
        </div>
    )
}
