import Api from '../api/Services'
import { takeEvery, call, delay, put } from '@redux-saga/core/effects';

function* getUser() {
    try {
        let user = yield call(Api.getUser);
        console.log('user', user)
        yield put({ type: 'USER_SUCCESS', payload: { data: user } });
    } catch (err) {
        console.log('erro', err)
        yield put({ type: 'USER_FAILURE' });
    }
}

function* rootSaga() {
    yield takeEvery('USER_WAITING', getUser);
}

export default rootSaga;