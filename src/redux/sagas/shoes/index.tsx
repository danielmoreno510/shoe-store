import {all} from 'redux-saga/effects';

import shoesListSaga from './shoesListSaga';

export default function* rootSaga() {
  yield all([shoesListSaga()]);
}
