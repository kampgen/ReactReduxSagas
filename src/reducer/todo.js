
const initialState = {
    status: 'teste',
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                status: 'waiting'
            }
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                status: 'success'
            }
        case 'ADD_TODO_FAILURE':
            return {
                ...state,
                status: 'failure'
            }
        default:
            return state
    }
}