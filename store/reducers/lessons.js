import { FETCH_LESSONS_ITEMS } from '../types';

const defaultState = {
    list: [],
    error: null,
    page: 0,
    hasMore: true,
    isLoading: false,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case FETCH_LESSONS_ITEMS.REQUEST:
            return {
                ...state,
                isLoading: true,
                page: payload.page
            };
        case FETCH_LESSONS_ITEMS.SUCCESS:
            return {
                ...state,
                list: [...state.list, ...payload.lessons],
                hasMore: payload.hasMore,
                isLoading: false,
            };
        case FETCH_LESSONS_ITEMS.FAIL:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};
