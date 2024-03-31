import React from "react";
import Propscomponents from './week3/propscompnents';
import Studentdeatils from './week3/studentdeatils';
// import Employeedetails from "./week3/employeedetails";
// import StudentComponent from "./week3/Studentcomponent";
function week3(){
    return(
        <div>
            <h1 style={{color:'#0534a1'}}>Week 3  - Create React App and Demonstrate Props</h1>
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Q1.Create a React Component, using props render one & multiple attribute values and display it on the webpage.</h3> */}
            <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Create a React Component, using props render one & multiple attribute values</h3>
            <Propscomponents name="Vardhan" hallticket="2211CS010324"/>
            <hr/>
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Q2.Create a React Component, using props through functions display student details (Std-id, Std-Name, Std-Email) on the webpage.</h3> */}
            <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Create a React Component, using props through functions display student details</h3>
            <Studentdeatils/>
            <hr/>
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Q3.Create a React Component, using props through classes display employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.</h3> */}
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Create a React Component, using props through classes display employee details</h3>
            <Employeedetails/>
            <hr/> */}
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Q4.Create a Student component and able to display Student details which vary in htno, name, mailid, and mobileno to users.</h3> */}
            {/* <h3 style={{width:'70% ',margin:'auto',fontFamily:'Trebuchet-MS-sans-serif'}}>Create a Student component and able to display Student details</h3>
            <StudentComponent student={student}/> */}
        </div>
    );
}
export default week3;

// const student ={
//     Name:"L.Guna Vardhan Reddy",
//     RollNo:"2211CS010324",
//     Mobile:9856746214,
//     Email:"2211cs010324@mallareddyuniversity.ac.in"
// }
