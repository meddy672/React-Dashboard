import React from "react";

function InfoBoxes(props) {
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
        {props.completed} <small style={{
          fontSize: 10,
          marginLeft: -15
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
          Completed
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
        {props.inProgress} <small style={{
          fontSize: 10,
          marginLeft: -15
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
          In Progress
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
        {props.archived} <small style={{
          fontSize: 10,
          marginLeft: -15
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
        {props.newProject} <small style={{
          fontSize: 10,
          marginLeft: -15
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
