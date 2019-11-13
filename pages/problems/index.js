import { connect } from 'react-redux';

import { fetchProblemsItemsRequest } from "../../store/actions/problems";
import Problems from './Problems';

export default connect(
    state => ({ 
        list: state.problems.list,
        hasMore: state.problems.hasMore,
        page: state.problems.page,
        isLoading: state.problems.isLoading,
    }),
    { fetchProblemsItemsRequest }
)(Problems);
