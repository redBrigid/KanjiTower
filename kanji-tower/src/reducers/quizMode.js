const quizModeReducer = (state = 'question', action) => {
    switch (action.type) {
        case 'QUIZ_MODE_QUESTION':
            return {
                state:'question',
                payload:action.payload+1
            };
        case 'QUIZ_MODE_ANSWER':
            return {
                state:'answer',
                payload:action.payload+1
            };
        default:
            return state;
    }
}
export default quizModeReducer;
