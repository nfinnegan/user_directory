import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const EmpDirectory = () => {
  const [employees, setEmployees] = useState();

  let newEmps;
  let filteredEmps = [];

  useEffect(() => {
    getEmps();
  }, []);

  const getEmps = () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        const { results: allEmps } = data;
        for (let employee of allEmps) {
          newEmps = [
            {
              id: Math.floor(Math.random() * 1000),
              name: `${employee.name.first} ${employee.name.last}`,
              email: employee.email,
              phone: employee.cell,
            },
          ];
          filteredEmps.push(...newEmps);
        }

        return filteredEmps;
      })
      .then((...filteredEmps) => {
        setEmployees(filteredEmps);
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
      name: "Employee Name",
      selector: "empName",
      sortable: true,
    },
    {
      name: "Email",
      selector: "empEmail",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "empPhone",
      sortable: false,
    },
  ];

  console.log(employees);

  return (
    <DataTable title="Employee Directory" columns={columns} data={employees} />
  );
};

export default EmpDirectory;
