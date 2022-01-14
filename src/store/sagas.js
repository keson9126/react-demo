import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'
import { getTodoListAction } from './actionCreators';
import { GET_MY_LIST } from "./actionTypes";

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const res = yield axios.get('https://www.fastmock.site/mock/d147e6c1d84190f5572ee7b4cc00b729/react_learn/todolist01')
  const action = getTodoListAction(res.data);
  yield put(action)
}

export default mySaga;
