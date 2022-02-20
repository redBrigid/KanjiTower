import React from 'react'
import Floor from './Floor';

export default function Tower() {
    const floorList = [
        //floor1
        [
            {
                id: 1,
                meaning: 'moon',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 2,
                meaning: 'fire',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 3,
                meaning: 'water',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 4,
                meaning: 'tree',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 5,
                meaning: 'gold',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 6,
                meaning: 'soil',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 7,
                meaning: 'sun',
                kanji: 'todo',
                picture: 'todo'
            }
        ],
        //floor2
        [
            {
                id: 8,
                meaning: 'human',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 9,
                meaning: 'woman',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 10,
                meaning: 'man',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 11,
                meaning: 'child',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 12,
                meaning: 'rice field',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 13,
                meaning: 'river',
                kanji: 'todo',
                picture: 'todo'
            },
            {
                id: 14,
                meaning: 'car',
                kanji: 'todo',
                picture: 'todo'
            }
        ]
    ]; 
    return (

        <div>Tower
            <div>
                {floorList.map((floor, i,) => <Floor key={i} floor={floor} floorNumber={i+1}/> )}
            </div>
        </div>
    )
}
