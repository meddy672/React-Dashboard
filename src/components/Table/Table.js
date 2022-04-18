// @ts-nocheck
import React from "react";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./components/EnhancedTable";
import records from "../../data/records.js";

function Table() {
  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const [data, setData] = React.useState(React.useMemo(() => records, []));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

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

  return (
    <>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </>
  );
}

export default Table;
