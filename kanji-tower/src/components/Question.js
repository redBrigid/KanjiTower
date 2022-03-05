import React from 'react'
import { useSelector } from 'react-redux'

export default function Question(props) {
    const index = useSelector(state=>state.quizIndexReducer)
    console.log('ppp', props.value)
    return (
        <div>
            <p>{props.data[index].kanji}</p>
        </div>
    )
}
