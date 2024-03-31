import React from "react";

const studentDetails = [
    {
      sid: "2211CS010295",
      sname: "K.Sai krishna",
      email: "2211cs010295@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010297",
      sname: "K.H.S.Bharadwaj",
      email: "2211cs010297@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010298",
      sname: "K.Bharath",
      email: "2211cs010298@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010324",
      sname: "L.Guna Vardhan Reddy",
      email: "2211cs010324@mallareddyuniversity.ac.in",
    },
]


function studentdetails(props){
    return(
        <div>
            <h2><u>Using props through functions to display student details</u></h2>
        <div style={{width:'fit-content',margin:'auto'}}>
            <table className="table table-hover">
                <thead>
                    <tr>
                      <td>Student Name</td>
                        <td>Student Id</td>
                        <td>Student Email</td>
                    </tr>
                </thead>
                <tbody className="table table-bordered border-dark table-group-divider ">
                {studentDetails.map((props, index) => (
                <tr data-index={index}>
                  <td>{props.sname}</td>
                  <td>{props.sid}</td>
                  <td>{props.email}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default studentdetails;