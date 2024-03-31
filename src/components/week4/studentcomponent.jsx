import React, { useState } from "react";
function useStateStudentComponent(){
    const intialdata={
        name:null,
        rollno:null,
        emailid:null,
        semid:null,
    }
    const [data, setdata]= useState(intialdata);
    function changedetails(){
        setdata({
            name: "L.Guna Vardhan Reddy",
            rollno: "2211CS010324",
            emailid: "2211CS010324@mallareddyuniversity.ac.in",
            semid:"G7B-35",
        });
    }

    return(
        <div>
            <br/>
            <h4>Display Student details using useState</h4>
            <p className="p1">Hall-Ticket: <b>{data.rollno}</b> </p>
            <p className="p1">Sem-Id: <b>{data.semid}</b> </p>
            <p className="p1">Student Name: <b>{data.name}</b> </p>
            <p className="p1">Email Id : <b>{data.emailid}</b> </p>
            <button onClick={changedetails}>Click here to get Details</button>
        </div>
    );
}
export default useStateStudentComponent;
