/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import TextField from "../components/TextField/TextField";
import Link from "@material-ui/core/Link";
import Table from "../components/Table/Table.js";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import records from "../data/records.js";


function Dashboard(props) {

  const columns = React.useMemo(
    () => [
      {
        Header: () => <span style={{ color: "white" }}>Name</span>,
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: () => <span style={{ color: "white" }}>Division</span>,
        accessor: "division",
      },
      {
        Header: () => <span style={{ color: "white" }}>Project Owner</span>,
        accessor: "project_owner",
      },
      {
        Header: () => <span style={{ color: "white" }}>Budget</span>,
        accessor: "budget",
      },
      {
        Header: () => <span style={{ color: "white" }}>Status</span>,
        accessor: "status",
      },
      {
        Header: () => <span style={{ color: "white" }}>Created</span>,
        accessor: "created",
      },
      {
        Header: () => <span style={{ color: "white" }}>Modified</span>,
        accessor: "modified",
      },
      {
        Header: () => <span style={{ color: "white" }}>Details</span>,
        accessor: "name",
        Cell: () => <Link href="#">Open Project</Link>,
      },
    ],
    []
  );

  const completed = records.filter((record) => record.status === "delivered");
  const inProgress = records.filter((record) => record.status === "working");
  const archived = records.filter((record) => record.status === "archived");
  const newProject = records.filter((record) => record.status === "new");

  return (
    <>
      <div className="content">
        <InfoBoxes
          completed={completed.length}
          inProgress={inProgress.length}
          archived={archived.length}
          newProject={newProject.length}
        />
        {/* <TextField state={true} />
        <Link to="/"> Export To PDF</Link> */}
        <Table columns={columns} records={records}/>

      </div>
    </>
  );
}

export default Dashboard;
