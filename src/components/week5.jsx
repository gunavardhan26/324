import React from "react";
import StudentComponent from "./week5/studentComponent";
import EmpComponent from "./week5/EmpComponent";
import './week5/week5.css';

function week5(){
    return(
        <div className="week5">
            <h1 style={{color:'#0534a1'}}>Week - 5: Create React App and Show Student List using Bootstrap Card Layout</h1>
            <div className="container1">
                <br/>
                <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Display Student info using Bootstrap Card Layout</h3>
                <br/>
                <StudentComponent/>
                <br/>
                <hr/>
                <br/>
                <h3 style={{width:'50% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Excerise:</h3>
                <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Display  Employees info using Bootstrap Card Layout</h3>
                <br/>
                <EmpComponent/>
                <br/>
            </div>
        </div>
    );
}
export default week5;