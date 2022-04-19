import React from "react";

function InfoBoxes(props) {
    

    return (
        <div style={{
            display: "flex",
            flexWrap: 'nowrap',
            justifyContent: 'space-between'
          }}>
  
            <div style={{
              width: 300,
              margin: 10,
              textAlign: 'center',
              fontSize: '4.0rem',
              color: 'white',
              boxShadow: "3px 5px #0a0a0f",
              backgroundColor: "#15141f"
            }}>
              { props.completed }
              <div style={{
                display: 'block',
                minHeight: 30,
                borderTop: '1px solid #0a0a0f',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 26
              }}>Completed</div>
            </div>
            <div style={{
              width: 300,
              margin: 10,
              textAlign: 'center',
              fontSize: '4.0rem',
              color: 'white',
              boxShadow: "3px 5px #0a0a0f",
              backgroundColor: "#15141f",
            }}>{ props.inProgress }
                        <div style={{
                display: 'block',
                minHeight: 30,
                borderTop: '1px solid #0a0a0f',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 26
              }}>In Progress</div>
            </div>
            <div style={{
              width: 300,
              margin: 10,
              textAlign: 'center',
              fontSize: '4.0rem',
              color: 'white',
              boxShadow: "3px 5px #0a0a0f",
              backgroundColor: "#15141f"
            }}>{ props.archived }
             <div style={{
                display: 'block',
                minHeight: 30,
                borderTop: '1px solid #0a0a0f',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 26
              }}>Archived</div>
            </div>
              <div style={{
              width: 300,
              margin: 10,
              textAlign: 'center',
              fontSize: '4.0rem',
              color: 'white',
              boxShadow: "3px 5px #0a0a0f",
              backgroundColor: "#15141f"
            }}>{ props.newProject }
            <div style={{
                display: 'block',
                minHeight: 30,
                borderTop: '1px solid #0a0a0f',
                fontSize: 26,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 26
              }}>New</div>
            </div>
          </div>
    )
}
export default InfoBoxes;