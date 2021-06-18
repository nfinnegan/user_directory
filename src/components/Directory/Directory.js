import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./style.css";

const EmpDirectory = () => {
  const [employees, setEmployees] = useState();
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  let newEmps;
  let filteredEmps = [];

  useEffect(() => {
    getEmps();
  }, []);

  const getEmps = () => {
    fetch("https://randomuser.me/api/?results=50&nat=us")
      .then((response) => response.json())
      .then((data) => {
        const { results: allEmps } = data;
        for (let employee of allEmps) {
          newEmps = [
            {
              id: Math.floor(Math.random() * 10000),
              first_name: `${employee.name.first}`,
              last_name: `${employee.name.last}`,
              email: employee.email,
              phone: employee.cell,
            },
          ];
          filteredEmps.push(...newEmps);
        }

        return filteredEmps;
      })
      .then((filteredEmps) => {
        setEmployees(filteredEmps);
        setFilteredEmployees(filteredEmps);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      name: "Emp-ID",
      selector: "id",
      sortable: false,
    },
    {
      name: "Employee First Name",
      selector: "first_name",
    },
    {
      name: "Employee Last Name",
      selector: "last_name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: false,
    },
  ];

  const handleSearchInput = (event) => {
    const searchName = event.target.value.toLowerCase();

    if (searchName === "") {
      setFilteredEmployees(employees);
    } else {
      const results = employees.filter((emp) => {
        return emp.first_name.toLowerCase() == searchName;
      });

      setFilteredEmployees(results);
    }
  };

  return (
    <div className="container directoryWrapper">
      <div className="textWrapper">
        <strong>
          <p>
            Sort employees by{" "}
            <span className="searchBy">last name or email</span> in ascending or
            descending order by simply <br></br>hoovering over the column header
            & clicking. Or search employees by{" "}
            <span className="searchBy">first name</span> below!
          </p>
        </strong>
        <input
          onChange={handleSearchInput}
          placeholder="Search Employee By Name"
          id="empInput"
          type="text"
        ></input>
      </div>
      <DataTable
        className="card-body resultsInfo"
        title="Employee Directory"
        columns={columns}
        data={filteredEmployees}
      />
    </div>
  );
};

export default EmpDirectory;
