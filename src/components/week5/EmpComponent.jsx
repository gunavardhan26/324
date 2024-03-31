import React, { useEffect, useState } from "react";
import './week5.css';

function EmpComponent(){

    const apiurl='https://gunavardhan26.github.io/2211cs010324_mernstack/Faculty.json';
    
    const[employees, setemp]= useState([]);

    const fetchemp=async ()=>{
        const response= await fetch(apiurl);
        const employee=await response.json();
        setemp(employee);
    }
    useEffect(()=>{
        fetchemp();
    },[])

    return(
        <div className="studentComponent">
            <div class="row row-cols-2 row-cols-md-3 g-4">
            {employees.slice(0,6).map((eachEmployee, index)=> (
                <div class="col">
                <div className="card">
                <div className="card-body">
                <img src="https://gunavardhan26.github.io/2211cs010324_mernstack/clipart1442578.png" class="img-fluid rounded-start" alt="props" style={{width:"50px"}}/>
                        <h5 className="card-title">{eachEmployee.Name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{eachEmployee.Designation}</h6>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{eachEmployee.qualification}</h6>
                        <p className="card-text">{eachEmployee.Experience} years Experience</p>
                        <a href={eachEmployee.EmailId} class="card-link">{eachEmployee.EmailId}</a>
                        </div>
            </div>
            </div>
            ))}
            </div>
            
                
        </div>
    );
}
export default EmpComponent;