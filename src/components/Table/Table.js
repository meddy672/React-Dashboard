// @ts-nocheck
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./components/EnhancedTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Table({ columns, records, setData }) {
  
  const [tableData, setTableData] = React.useState(React.useMemo(() => records, [records]));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  const updateMyData = (rowIndex, columnId, value) => {    
    console.log(value)
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          console.log(row[columnId])
          if (row[columnId] !== value) {
            toast.info('Project Updated!');
            return {
              ...old[rowIndex],
              [columnId]: value,
            };
          }
        }
        return row;
      })
    );
  };

  return (
    <>
      <CssBaseline />
      <EnhancedTable
        columns={columns}
        data={tableData}
        setData={setTableData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        theme="dark"
      />
    </>
  );
}

export default Table;
