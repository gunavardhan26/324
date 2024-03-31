import React from "react";

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
            <div className="Container-2">
            <div class="row row-cols-2 row-cols-md-3 g-4">
            {arrayobject.map((student, index) => (
                <div key={index} className="card">
                        <h5><u>{student.student}</u></h5>
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
