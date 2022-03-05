export const addCurrency=()=>{
    return {
        type:'INCREMENT_CURRENCY'
    };
};

export const payCurrency=()=>{
    return{
        type:'DECREMENT_CURRENCY'
    };
};

export const setQuizMode=()=>{
    return{
        type:'SET_QUIZ_MODE'
    };
};

export const setTowerMode=()=>{
    return{
        type:'SET_TOWER_MODE'
    };
};

export const setCharacterDetailsMode=(arg)=>{
    return{
        type:'SET_CHARACTER_DETAILS_MODE',
        payload: arg
    };
};

export const plusButton=arg=>{
    return{
        type:'PLUS_BUTTON',
        payload: arg
    }
}

export const minusButton=arg=>{
    return{
        type:'MINUS_BUTTON',
        payload: arg
    }
}

export const quizModeQuestion=arg=>{
    return{
        type:'QUIZ_MODE_QUESTION',
        payload: arg
    }
}

export const quizModeAnswer=arg=>{
    return{
        type:'QUIZ_MODE_ANSWER',
        payload: arg
    }
}

export const nextIndex=maxIndex=>{
    return{
        type:'NEXT_INDEX',
        payload: maxIndex
    }
}

export const prevIndex=maxIndex=>{
    return{
        type:'PREV_INDEX',
        payload: maxIndex
    }
}
