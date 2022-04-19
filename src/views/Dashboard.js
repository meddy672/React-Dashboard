import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Table from "../components/Table/Table.js";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import records from "../data/records.js";

function Dashboard() {
  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Name
          </span>
        ),
        accessor: "title",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Division
          </span>
        ),
        accessor: "division",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Project Owner
          </span>
        ),
        accessor: "project_owner",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Budget
          </span>
        ),
        accessor: "budget",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Status
          </span>
        ),
        accessor: "status",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Created
          </span>
        ),
        accessor: "created",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Modified
          </span>
        ),
        accessor: "modified",
      },
      {
        Header: () => (
          <span style={{ color: "white", fontSize: 17, fontWeight: "bolder" }}>
            Details
          </span>
        ),
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
  const tableRecords = records.map((record) => {
    return {
      title: record.title,
      division: record.division,
      project_owner: record.project_owner,
      budget: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(record.budget),
      status: record.status.charAt(0).toUpperCase() + record.status.slice(1),
      created: record.created,
      modified: record.modified,
      name: record.name,
    };
  });

  return (
    <>
      <div className="content">
        <Typography variant="h3" id="tableTitle">
          Overview
        </Typography>
        <hr
          style={{
            borderBottom: "solid 1px lightgray",
            borderBottomWidth: "thin",
          }}
        />
        <InfoBoxes
          completed={completed.length}
          inProgress={inProgress.length}
          archived={archived.length}
          newProject={newProject.length}
        />
        <Table columns={columns} records={tableRecords} />
      </div>
    </>
  );
}

export default Dashboard;
