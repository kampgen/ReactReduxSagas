
const initialState = {
    status: 'teste'
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'USER_WAITING':
            return {
                ...state,
                status: 'waiting'
            }
        case 'USER_SUCCESS':
            return {
                ...state,
                status: 'success'
            }
        case 'USER_FAIL':
            return {
                ...state,
                status: 'fail'
            }
        default:
            return state
    }
}