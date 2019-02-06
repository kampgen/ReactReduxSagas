import addTodoItem from '../api/Services';
import { takeEvery, call, put } from '@redux-saga/core/effects';

function* addTodo(item) {
    try {
        //yield call(addTodoItem(item.payload.item));
        yield put({ type: 'ADD_TODO_SUCCESS' });
    } catch (err) {
        console.log('erro', err);
        yield put({ type: 'ADD_TODO_FAILURE' });
    }
}

function* rootSaga() {
    yield takeEvery('ADD_TODO', addTodo);
}

export default rootSaga;