import React, { useEffect, useState } from "react";

const DataFetchingComponent=()=>{

    let heading=["S.No", "SemId","Name","HTNo", "EmailID"];
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
        <div style={{textAlign:"center"}}>
            <br/>
            <h4>Fetch Students Data using useEffect</h4>
            <table className="table table-stripped-columns table-hover table-info" style={{width:"70%",margin:'auto'}}>
                <thead>
                    <tr>
                        {heading.map((head, headID)=>(
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                      {students.slice(66,71).map((eachstudent, index)=> (
                        <tr key={index}>
                            <td>{index+67}</td>
                            <td>{eachstudent.SemCode}</td>
                            <td>{eachstudent.Name}</td>
                            <td>{eachstudent.Roll}</td>
                            <td>{eachstudent.EmailId}</td>
                        </tr>
                        ))}                 
                </tbody>
            </table>
        </div>
    );
}
export default DataFetchingComponent;
