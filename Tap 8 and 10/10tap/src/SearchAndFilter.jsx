// src/SearchAndFilter.jsx
import React from 'react';
import PropTypes from 'prop-types';

const SearchAndFilter = ({ searchTerm, setSearchTerm, department, setDepartment, departments }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};

SearchAndFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  department: PropTypes.string.isRequired,
  setDepartment: PropTypes.func.isRequired,
  departments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchAndFilter;
