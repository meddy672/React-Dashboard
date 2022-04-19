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
import { Link } from "react-router-dom";
import Table from "../components/Table/Table.js";


function Dashboard(props) {

  return (
    <>
      <div className="content">
        
        <div style={{
          display: "flex",
          flexWrap: 'nowrap',
          justifyContent: 'space-between'
        }}>

          <div style={{
            width: 300,
            margin: 10,
            textAlign: 'center',
            fontSize: '5.3rem',
            color: 'white',
            boxShadow: "3px 5px #0a0a0f",
            backgroundColor: "#15141f"
          }}>1</div>
          <div style={{
            width: 300,
            margin: 10,
            textAlign: 'center',
            fontSize: '5.3rem',
            color: 'white',
            boxShadow: "3px 5px #0a0a0f",
            backgroundColor: "#15141f",
          }}>2</div>
          <div style={{
            width: 300,
            margin: 10,
            textAlign: 'center',
            fontSize: '5.3rem',
            color: 'white',
            boxShadow: "3px 5px #0a0a0f",
            backgroundColor: "#15141f"
          }}>3</div>
                    <div style={{
            width: 300,
            margin: 10,
            textAlign: 'center',
            fontSize: '5.3rem',
            color: 'white',
            boxShadow: "3px 5px #0a0a0f",
            backgroundColor: "#15141f"
          }}>4</div>
        </div>

        {/* <TextField state={true} />
        <Link to="/"> Export To PDF</Link> */}
        <Table />

      </div>
    </>
  );
}

export default Dashboard;
