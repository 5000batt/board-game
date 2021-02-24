import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/likes'

function* addLike(action) {
  console.log("-- Saga: action.type --");
  console.log(action.type);

  try{
    const result = yield call(api.post, action.payload);
    console.log("-- Saga: api result --");
    console.log(result.data);

    yield put({type:"ADD_LIKE_SUCCEEDED", payload: action.payload});
  } catch (error) {
    yield put({type:"SHOW_ALERT", msg:error.message});
  }
}

function* fetchLikes(action) {
  console.log("-- Saga: action.type --")
  console.log(action.type);

  const result = yield call(api.list);
  console.log("-- Saga: api result --")
  console.log(result.data);

  yield put({type:'FETCH_LIKES_SUCCEEDED', payload: result.data})
}

function* removeLike(action) {
  console.log("-- Saga: action.type --")
  console.log(action.type);
  const result = yield call(api.delete, action.payload)
  console.log("-- Saga: api result --")
  console.log(result.data);

  yield put({type:'REMOVE_LIKE_SUCCEEDED', payload: action.payload})
}

function* likesSaga() {
  yield takeEvery("ADD_LIKE", addLike);
  yield takeLatest("FETCH_LIKES", fetchLikes);
  yield takeEvery("REMOVE_LIKE", removeLike);
}

export default likesSaga;