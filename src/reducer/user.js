
const initialState = {
    status: 'teste',
    info: []
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
                status: 'success',
                info: [
                    ...state.info,
                    {
                        key: Math.random(),
                        ...action.payload.data
                    }
                ]
            }
        case 'USER_FAILURE':
            return {
                ...state,
                status: 'failure'
            }
        default:
            return state
    }
}