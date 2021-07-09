import {takeLatest, put, call} from 'redux-saga/effects';

import {putShoesList} from '../../actions';
import {FETCH_SHOES_LIST} from '../../actions/types';
import {shoesService} from '../../../services/api/shoesService';
import {handleHttpError} from '../../../services/httpUtils';

export function* fetchShoesList() {
  const context = 'fetchShoesList saga';

  try {
    const response = yield call(shoesService);

    // Dispatches an action to get the node data to the state tree.
    yield put(putShoesList(response));
  } catch (error) {
    yield put(putShoesList([]));
    handleHttpError(error, context, error.error);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchShoesList() {
  yield takeLatest(FETCH_SHOES_LIST, fetchShoesList);
}
