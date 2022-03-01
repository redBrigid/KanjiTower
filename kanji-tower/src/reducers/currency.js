const currencyReducer = (state = 1220, action) => {
    switch (action.type) {
        case 'INCREMENT_CURRENCY':
            return state + 1;
        case 'DECREMENT_CURRENCY':
            return state - 1;
        default:
            return state;
    }
}

export default currencyReducer;


