//import React from 'react'
import { connect } from 'react-redux';

import Filter from '../pure/Filter';
import { setVisibilityFilter } from '../../Store/actions/Actions.js';


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer
