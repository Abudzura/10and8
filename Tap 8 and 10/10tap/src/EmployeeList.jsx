// src/EmployeeList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.length > 0 ? (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.department}
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeList;
