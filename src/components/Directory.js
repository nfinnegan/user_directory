import MUIDataTable from "mui-datatables";

const empDirectory = () => {
  let allEmps = [];
  let filteredEmps = [];
  let newEmps = {};
  fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((data) => {
      // console.log({ data });
      const { results } = data;
      let allEmps = results;
      console.log(results);
      for (let employee of allEmps) {
        newEmps = {
          id: Math.floor(Math.random() * 1000),
          name: `${employee.name.first} ${employee.name.last}`,
          email: employee.email,
          phone: employee.cell,
        };
        // filteredEmps.push(id, name, email, phone);
      }

      console.log(newEmps);
    });

  const columns = [
    {
      name: "id",
      label: "Emp-ID",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "phone",
      label: "Cell Phone",
      options: {
        filter: false,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "textField",
  };

  // });
  return (
    <MUIDataTable
      title={"Employee Directory"}
      data={filteredEmps}
      columns={columns}
      options={options}
    />
  );
};

export default empDirectory;
