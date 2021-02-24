import { fork } from 'redux-saga/effects'
import likesSaga from './likes'

export default function* rootSaga() {
  yield fork(likesSaga)
}

