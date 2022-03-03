const quizModeReducer = (state = 'question', action) => {
    switch (action.type) {
        case 'QUIZ_MODE_QUESTION':
            return {
                state:'question',
                payload:action.payload
            };
        case 'QUIZ_MODE_ANSWER':
            return {
                state:'answer',
                payload:action.payload
            };
        default:
            return state;
    }
}
export default quizModeReducer;
