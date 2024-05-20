// src/App.js
import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import SearchAndFilter from './SearchAndFilter';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setDepartments([...new Set(data.map((employee) => employee.department))]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const results = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (department === '' || employee.department === department)
    );
    setFilteredEmployees(results);
  }, [employees, searchTerm, department]);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        department={department}
        setDepartment={setDepartment}
        departments={departments}
      />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
