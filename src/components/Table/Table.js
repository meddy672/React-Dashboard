// @ts-nocheck
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "./components/EnhancedTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Table({ columns, records }) {
  
  const [data, setData] = React.useState(React.useMemo(() => records, [records]));
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          if (row[columnId] !== value) {
            toast.info('Project Updated!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Table;
