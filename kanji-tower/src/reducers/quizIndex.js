const quizIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_INDEX':
            return state+1
        default:
            return state;
    }
}
export default quizIndexReducer;
