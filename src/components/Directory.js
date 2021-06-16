import MUIDataTable from "mui-datatables";

const empDirectory = () => {
  let allEmps = [];
  let filteredEmps = [];
  let newEmps;
  //   fetch("https://randomuser.me/api/?results=20")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log({ data });
  //       const { results } = data;
  //       let allEmps = results;

  for (let employee of allEmps) {
    //console.log(employee);
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
  //console.log(filteredEmps);

  //console.log(filteredEmps);

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
    filter: true,
    filterType: "checkbox",
  };

  // });
  return (
    <MUIDataTable
      title={"Employee Directory"}
      data={newEmps}
      columns={columns}
      options={options}
    />
  );
};

export default empDirectory;
