import { connect } from 'react-redux';

import { fetchPassagesItemsRequest } from "../../store/actions/passages";
import Passages from './Passages';

export default connect(
    state => ({ 
        list: state.passages.list,
        hasMore: state.passages.hasMore,
        page: state.passages.page,
        isLoading: state.passages.isLoading,
    }),
    { fetchPassagesItemsRequest }
)(Passages);
