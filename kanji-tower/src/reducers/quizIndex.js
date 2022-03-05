const quizIndexReducer = (state = 0, action) => {
    console.log('zzzz: ',action)
    switch (action.type) {
        case 'NEXT_INDEX':
            return state+1
        case 'PREV_INDEX':
            return state-1
        default:
            return state;
    }
}
export default quizIndexReducer;
