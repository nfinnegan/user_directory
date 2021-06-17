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
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        const { results: allEmps } = data;
        for (let employee of allEmps) {
          newEmps = [
            {
              id: Math.floor(Math.random() * 10000),
              name: `${employee.name.first} ${employee.name.last}`,
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
        console.log(filteredEmps);
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
      selector: "name",
      //   sortable: true,
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

  console.log(employees);

  return (
    <DataTable title="Employee Directory" columns={columns} data={employees} />
  );
};

export default EmpDirectory;
