import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_LESSONS_ITEMS } from '../types';
import { fetchLessonsItems } from '../../api';
import { fetchLessonsItemsSucceed, fetchLessonsItemsFailed } from '../actions/lessons';

function* fetchLessonsSaga({ payload: { page } }) {
    try {
        const response = yield call(fetchLessonsItems, page);
        yield put(fetchLessonsItemsSucceed({ lessons: response.data.lessons, hasMore: response.data.pages > page }));
    } catch (err) {
        yield put(fetchLessonsItemsFailed(err));
    }
}

export default function* watchLessonsItems() {
    yield takeLatest(FETCH_LESSONS_ITEMS.REQUEST, fetchLessonsSaga);
}
