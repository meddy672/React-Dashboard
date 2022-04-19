// @ts-nocheck
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./components/EnhancedTable";


function Table({columns, records}) {

  const updateMyData = (rowIndex, columnId, value) => {
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
