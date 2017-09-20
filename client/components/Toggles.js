import React from 'react'
import FilterLink from '../containers/FilterLink'

const Toggles = () => (
  <p className="footer">
    Show:
    {"    "}
    <FilterLink filter="SHOW_ALL" className="filterToggle">
      All
    </FilterLink>
    {"    "}
    <FilterLink filter="SHOW_ACTIVE" className="filterToggle">
      Active
    </FilterLink>
      {"    "}
    <FilterLink filter="SHOW_COMPLETED" className="filterToggle">
      Completed
    </FilterLink>
  </p>
)

export default Toggles
