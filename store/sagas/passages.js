import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_PASSAGES_ITEMS } from '../types';
import { fetchPassagesItems } from '../../api';
import { fetchPassagesItemsSucceed, fetchPassagesItemsFailed } from '../actions/passages';

function* fetchPassagesSaga({ payload: { page } }) {
    try {
        const response = yield call(fetchPassagesItems, page);
        yield put(fetchPassagesItemsSucceed({ passages: response.data.passages, hasMore: response.data.pages > page }));
    } catch (err) {
        yield put(fetchPassagesItemsFailed(err));
    }
}

export default function* watchPassagesItems() {
    yield takeLatest(FETCH_PASSAGES_ITEMS.REQUEST, fetchPassagesSaga);
}
