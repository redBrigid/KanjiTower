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