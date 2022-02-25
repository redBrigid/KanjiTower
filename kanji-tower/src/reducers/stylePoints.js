const stylePointsReducer = (state=0,action)=>{
    switch(action.type){
        case 'ADD_STYLE_POINTS_FOR_CHARACTER':
            return state+10;
        case 'ADD_STYLE_POINTS_FOR_DECO':
            return state+2;
        default:
            return state;
    }
}

export default stylePointsReducer;