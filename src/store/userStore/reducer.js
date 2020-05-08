
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                action.Name
            }
        case 'SET_AGE':
            return {
                ...state,
                action.Age
            }
        default:
            throw new Error('unknown action type')
    }
}