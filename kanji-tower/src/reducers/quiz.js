const quizReducer = (state = '-', action) => {
    switch (action.type) {
        case 'PLUS_BUTTON':
            return {
                state:'+',
                payload:action.payload
            };
        case 'MINUS_BUTTON':
            return {
                state:'-',
                payload:action.payload
            };
        default:
            return state;
    }
}
export default quizReducer;
