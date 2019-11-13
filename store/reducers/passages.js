import { FETCH_PASSAGES_ITEMS } from '../types';

const defaultState = {
    list: [],
    error: null,
    page: 0,
    hasMore: true,
    isLoading: false,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case FETCH_PASSAGES_ITEMS.REQUEST:
            return {
                ...state,
                isLoading: true,
                page: payload.page
            };
        case FETCH_PASSAGES_ITEMS.SUCCESS:
            return {
                ...state,
                list: [...state.list, ...payload.passages],
                hasMore: payload.hasMore,
                isLoading: false,
            };
        case FETCH_PASSAGES_ITEMS.FAIL:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};
