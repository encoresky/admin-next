import { connect } from 'react-redux';

import DetailsPage from './DetailsPage';

export default connect(
    state => ({ list: state.problems.list })
)(DetailsPage);
