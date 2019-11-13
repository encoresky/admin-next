import { connect } from 'react-redux';

import { fetchLessonsItemsRequest } from "../../store/actions/lessons";
import Lessons from './Lessons';

export default connect(
    state => ({ 
        list: state.lessons.list,
        hasMore: state.lessons.hasMore,
        page: state.lessons.page,
        isLoading: state.lessons.isLoading,
    }),
    { fetchLessonsItemsRequest }
)(Lessons);
