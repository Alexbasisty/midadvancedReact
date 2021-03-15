import React from "react";
import { connect } from "react-redux";

import { Button } from "../App";

const FilterButton = ({ onClick, children, active }) => {
    return (
        <Button onClick={onClick} disabled={active}>
            {children}
        </Button>
    );
};

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.filter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () =>
        dispatch({
            type: "FILTER_TODO",
            filter: ownProps.filter,
        }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
