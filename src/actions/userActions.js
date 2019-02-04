export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'
export const USER_WAITING = 'USER_WAITING'

export function gettingUser() {
    return {
        type: USER_WAITING
    }
}

export function gettingUserSuccess() {
    return {
        type: USER_SUCCESS
    }
}

export function gettingUserFail() {
    return {
        type: USER_FAIL
    }
}