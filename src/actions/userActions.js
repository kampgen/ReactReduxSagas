export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export const USER_WAITING = 'USER_WAITING';

export function gettingUser() {
    console.log('user_waiting');
    return {
        type: USER_WAITING
    }
}

export function gettingUserSuccess() {
    console.log('user_success');
    return {
        type: USER_SUCCESS
    }
}

export function gettingUserFail() {
    console.log('user_fail');
    return {
        type: USER_FAIL
    }
}