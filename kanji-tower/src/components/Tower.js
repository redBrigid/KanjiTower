import React from 'react'
import Floor from './Floor';
import data from '../data.json'
import Character from './Character';

export default function Tower() {
    return (

        <div className='tower2'><span>Tower</span>
            <div >
                {data.floorList.map((item, i,) => <Character key={i} character={item} />)}
            </div>
        </div>
    )
}
