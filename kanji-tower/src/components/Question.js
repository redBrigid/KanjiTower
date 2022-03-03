import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function Question(props) {

    const dispatch=useDispatch();
    return (
        <div>
            <p>Question</p>
            {/* <p>{props.data}</p> */}
            {/* <button onClick={()=>dispatch(minusButton(props.data))}>-</button>
            <button onClick={()=>dispatch(plusButton(props.data))}>+</button> */}
        </div>
    )
}
