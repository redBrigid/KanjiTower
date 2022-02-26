const menuReducer = (state = 'tower', action) => {
    switch (action.type) {
        case 'SET_TOWER_MODE':
            return 'tower';
        case 'SET_QUIZ_MODE':
            return 'quiz';
        default:
            return state;
    }
}

export default menuReducer;