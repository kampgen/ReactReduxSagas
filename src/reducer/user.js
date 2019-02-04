
export default function UserReducer(state = {}, action) {
    switch (action.type) {
        case 'USER_WAITING':
            return {
                ...state,
                userStats: 'waiting'
            }
        case 'USER_SUCCESS':
            return {
                ...state,
                userStats: 'success'
            }
        case 'USER_FAIL':
            return {
                ...state,
                userStats: 'fail'
            }
        default:
            return state
    }
}