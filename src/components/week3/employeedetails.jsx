import React from "react";

const employeeDetails = [
    {
      eid: "10001",
      ename: "A.Ajay",
      ds: "CEO",
    },
    {
      eid: "10002",
      ename: "D.Dhanush",
      ds: "Manager",
    },
    {
      eid: "10003",
      ename: "G.Ganesh",
      ds: "Team Leader",
    },
    {
      eid: "10004",
      ename: "M.Mahesh",
      ds: "Software Development Engineer",
    },
];


class employeedetails extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h2><u>Using props through classes to display employee details</u></h2>
            <div style={{width:'fit-content',margin:'auto'}}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Designation </th>
                  </tr>
                </thead>
                <tbody className="table table-bordered border-dark table-group-divider ">
                  {employeeDetails.map((emp, index) => (
                    <tr data-index={index}>
                      <td>{emp.eid}</td>
                      <td>{emp.ename}</td>
                      <td>{emp.ds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  export default employeedetails;