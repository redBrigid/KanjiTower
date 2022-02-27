import React from 'react'
import { useDispatch } from 'react-redux';
import {setQuizMode, setTowerMode} from '../actions'

export default function Navigation() {
     const dispatch = useDispatch();
    return (
        <div>
            <nav>
                <button onClick={()=>dispatch(setQuizMode())}>Quiz</button>
                <button onClick={()=>dispatch(setTowerMode())}>Tower</button>
            </nav>
        </div>
    )
}
