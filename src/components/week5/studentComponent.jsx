import React, { useEffect, useState } from "react";
import './week5.css';

function StudentComponent(){

    const apiurl='https://gunavardhan26.github.io/2211cs010324_mernstack/Group7.json';
    
    const[students, setstudents]= useState([]);

    const fetchstudents=async ()=>{
        const response= await fetch(apiurl);
        const students=await response.json();
        setstudents(students);
    }
    useEffect(()=>{
        fetchstudents();
    },[])

    return(
        <div className="studentComponent">
            <div class="row row-cols-2 row-cols-md-3 g-4">
            {students.slice(66,72).map((eachstudent, index)=> (
                <div class="col">
                <div className="card text-bg-info mb-3">
                <div className="card-body">
                        <h5 className="card-title">{eachstudent.Name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{eachstudent.Roll}</h6>
                        <p className="card-text">{eachstudent.SemCode}</p>
                        <a href={eachstudent.EmailId} class="card-link" style={{color:'black'}}>{eachstudent.EmailId}</a>
                        </div>
            </div>
            </div>
            ))}
            </div>
            
                
        </div>
    );
}
export default StudentComponent;