// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from './components/EnhancedTable'
import records from "../../data/records.js";

function Table() {
  
  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
    
    const [data, setData] = React.useState(React.useMemo(() => records, []))
    const [skipPageReset, setSkipPageReset] = React.useState(false)

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Division",
        accessor: "division",
      },
      {
        Header: "Project Owner",
        accessor: "project_owner",
      },
      {
        Header: "Budget",
        accessor: "budget",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Created",
        accessor: "created",
      },
      {
        Header: "Modified",
        accessor: "modified",
          },
          {
              Header: "Details",
              Cell: ({ cell: { value }, row: { original } }) => (
                <Link to={`users/${original.id}`}>Open Project</Link>
              ),
      }
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
