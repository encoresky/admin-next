import { all } from 'redux-saga/effects';
import watchProblemsItems from './problems';
import watchLessonsItems from './lessons';
import watchPassagesItems from './passages';

export default function* rootSaga() {
    yield all([ 
        watchProblemsItems(), watchLessonsItems(), watchPassagesItems()
    ]);
}
