import React from "react";
import './week6.css';

function List(){
    const arrayobject = [
        {
            student: "Student - 1",
            details: [{
                RollNo: "2211cs010297",
                Group: "G7B",
                Name: "K.H.S.Bharadwaj",
                Subjects: "MERN stack, ADS, DM, P&S"
            }]
        },
        {
            student: "Student - 2",
            details: [{
                RollNo: "2211cs010324",
                Group: "G7B",
                Name: "L.Guna Vardhan Reddy",
                Subjects: "MERN stack, ADS, DM, P&S"
            }]
        }
    ];

    return(
        <div className="Container-1">
            <br/>
            <h4>List:</h4>
            <br/>
            <div className="Container-2">
                <h5> Render 2 Student Details (RollNo, Group, Name, Subjects) using map() method.</h5>
        <div className="container">
            {arrayobject.map((student, index) => (
                <div key={index} className="card">
                    <div className="image">
                        <img src="https://gunavardhan26.github.io/2211cs010324_mernstack/clipart1442578.png" alt="prop"/>
                        <h5><u>{student.student}</u></h5>
                    </div>
                    <div className="content">
                        {student.details.map((eachStudent, idx) => (
                            <div key={idx}>
                                <br/>
                                <h6>RollNo: <b>{eachStudent.RollNo}</b></h6>
                                <h6>Group: <b>{eachStudent.Group}</b></h6>
                                <h6>Name: <b>{eachStudent.Name}</b></h6>
                                <h6>Subjects: <b>{eachStudent.Subjects}</b></h6>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </div>
        <br/>
        </div>
    );
}

export default List;
