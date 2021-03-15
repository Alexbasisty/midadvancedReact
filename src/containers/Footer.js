import React from "react";

import FilterButton from "../components/FilterButton";
import { AVAILABLE_FILTERS } from "../actions/todo.actions";

const Footer = () => {
    return (
        <footer>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>All</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE} secondary>
                Active
            </FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE} secondary>
                Completed
            </FilterButton>
        </footer>
    );
};

export default Footer;
