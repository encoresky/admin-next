import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_PROBLEMS_ITEMS } from '../types';
import { fetchProblemsItems } from '../../api';
import { fetchProblemsItemsSucceed, fetchProblemsItemsFailed } from '../actions/problems';

function* fetchProblemsSaga({ payload: { page } }) {
    try {
        const response = yield call(fetchProblemsItems, page);
        yield put(fetchProblemsItemsSucceed({ problems: response.data.problems, hasMore: response.data.pages > page }));
    } catch (err) {
        yield put(fetchProblemsItemsFailed(err));
    }
}

export default function* watchProblemsItems() {
    yield takeLatest(FETCH_PROBLEMS_ITEMS.REQUEST, fetchProblemsSaga);
}
