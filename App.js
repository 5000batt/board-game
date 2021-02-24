import 'react-native-gesture-handler';
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagamiddleware from 'redux-saga';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

import Main from './components/MainContainer';

const sagaMilldeware = createSagamiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMilldeware));

sagaMilldeware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

