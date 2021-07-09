import {all} from 'redux-saga/effects';
import shoesSagas from './shoes';

export default function* rootSaga() {
  yield all([shoesSagas()]);
}
