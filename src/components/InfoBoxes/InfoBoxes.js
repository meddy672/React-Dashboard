import React from "react";
import './InfoBoxes.css';

function InfoBoxes({ records }) {
  const completed = records.filter((record) => record.status.toLowerCase() === "delivered");
  const inProgress = records.filter((record) => record.status.toLowerCase() === "working");
  const archived = records.filter((record) => record.status.toLowerCase() === "archived");
  const newProject = records.filter((record) => record.status.toLowerCase() === "new");
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginBottom: 40,
      }}
    >
      <div
        style={{
          width: 300,
          margin: 10,
          textAlign: "center",
          fontSize: "4.0rem",
          color: "white",
          boxShadow: "3px 5px #0a0a0f",
          backgroundColor: "#15141f",
        }}
      >
        {completed.length} <small style={{
          fontSize: 10,
          marginLeft: -18
        }}>(Projects)</small>
        <div
          style={{
            display: "block",
            minHeight: 30,
            borderTop: "1px solid #0a0a0f",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 17,
          }}
        >
          Delivered
        </div>
      </div>
      <div
        style={{
          width: 300,
          margin: 10,
          textAlign: "center",
          fontSize: "4.0rem",
          color: "white",
          boxShadow: "3px 5px #0a0a0f",
          backgroundColor: "#15141f",
        }}
      >
        {inProgress.length} <small style={{
          fontSize: 10,
          marginLeft: -18
        }}>(Projects)</small>
        <div
          style={{
            display: "block",
            minHeight: 30,
            borderTop: "1px solid #0a0a0f",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 17,
          }}
        >
          Working
        </div>
      </div>
      <div
        style={{
          width: 300,
          margin: 10,
          textAlign: "center",
          fontSize: "4.0rem",
          color: "white",
          boxShadow: "3px 5px #0a0a0f",
          backgroundColor: "#15141f",
        }}
      >
        {archived.length} <small style={{
          fontSize: 10,
          marginLeft: -18
        }}>(Projects)</small>
        <div
          style={{
            display: "block",
            minHeight: 30,
            borderTop: "1px solid #0a0a0f",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 17,
          }}
        >
          Archived
        </div>
      </div>
      <div
        style={{
          width: 300,
          margin: 10,
          textAlign: "center",
          fontSize: "4.0rem",
          color: "white",
          boxShadow: "3px 5px #0a0a0f",
          backgroundColor: "#15141f",
        }}
      >
        {newProject.length} <small style={{
          fontSize: 10,
          marginLeft: -18
        }}>(Projects)</small>
        <div
          style={{
            display: "block",
            minHeight: 30,
            borderTop: "1px solid #0a0a0f",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 17,
          }}
        >
          New
        </div>
      </div>
    </div>
  );
}
export default InfoBoxes;
