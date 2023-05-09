import React from "react";

function SelectedFilters({ filters, removeFilter }) {
  return (
    <div className="selected-filters">
      {filters?.length > 0 &&
        filters.map((filter, index) => (
          <div key={index} className="selected-filter">
            <span>{filter.label}</span>
            <button onClick={() => removeFilter(filter)}>x</button>
          </div>
        ))}
    </div>
  );
}

export default SelectedFilters;