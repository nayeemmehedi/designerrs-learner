function Reducer(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            if (state <= 3) {
                return state = state + 1
            }
            break



        case 'DECREMENT':
            if (state >= 0) {
                return state = state - 1
            }
            break

        default:
            return state


    }

}

export default Reducer