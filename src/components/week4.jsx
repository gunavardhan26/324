import React from "react";
import './week4/week4.css';
import Studentcomponent from './week4/studentcomponent';
import DataFetchingComponent from "./week4/DataFetchingComponent";


function week4(){
    return(
        <div className="week4">
            {/* <h1 style={{color:'#0534a1'}}>Week 4 - Create React App and Implement API Calls using React Hooks</h1> */}
            <div className="container1">
            <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>UseState:</h3>
            <h3 style={{width:'50% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>1. Create a React Component, Display initial State of Student Hall-ticket and Name and change its State by using useState().</h3>
                <Studentcomponent/>
                <br/>
                <hr/>
                <br/>
                <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>UseEffect:</h3>
                <h3 style={{width:'50% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>1. Create a React Component, Display student Hall-ticket, Name and Email-Id using useEffect() fetch student info from student.json.</h3>
                <DataFetchingComponent/>
                <br/>
            </div>
        </div>
    );
}
export default week4;