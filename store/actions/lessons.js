import { FETCH_LESSONS_ITEMS } from '../types';

export function fetchLessonsItemsRequest(page) {
    return {
        type: FETCH_LESSONS_ITEMS.REQUEST,
        payload: { page },
    };
}
export function fetchLessonsItemsSucceed(items) {
    return {
        type: FETCH_LESSONS_ITEMS.SUCCESS,
        payload: items,
    };
}
export function fetchLessonsItemsFailed(error) {
    return {
        type: FETCH_LESSONS_ITEMS.FAIL,
        payload: error,
    };
}
