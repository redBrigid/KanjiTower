const menuReducer = (state = 'tower', action) => {
    switch (action.type) {
        case 'SET_TOWER_MODE':
            return 'tower';
        case 'SET_QUIZ_MODE':
            return 'quiz';
        case 'SET_CHARACTER_DETAILS_MODE':
            return {state:'characterDetails',payload:action.payload};
        default:
            return state;
    }
}

export default menuReducer;