import React, { useEffect, useState } from "react";

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
  console.log(employees);
  return <div>test</div>;
};

export default EmpDirectory;
