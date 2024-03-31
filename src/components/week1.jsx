import React from 'react';
import guna from'./img/man.png';
  
  function week1() {
    return (
      <div>
        {/* <h1 style={{color:'#0534a1'}}>Week 1</h1> */}
      <h1>Hello World!!!</h1>
      <hr/>
        <div>
          <p style={{color:'#21cfb2',fontFamily:'Lucida Handwriting, Brush Script MT, cursive',fontSize:'50px',margin:'5px'}}>L.Guna Vardhan Reddy</p>
          <p style={{color:'#21cfb2',fontFamily:'Lucida Handwriting, Brush Script MT, cursive',fontSize:'40px',margin:'5px'}}>2211CS010324</p>
          <p style={{color:'#21cfb2',fontFamily:'Lucida Handwriting, Brush Script MT, cursive',fontSize:'40px',margin:'5px'}}>G7B-35</p>
        </div>
        <hr/>
        <div>
          <div>
            <img
            src={guna} alt='prop' style={{width:'300px',height:'300px',borderRadius:'900px',border:'4px',borderColor:'#000000',borderStyle:'solid'}}
            />
            <h1>L.Guna Vardhan Reddy</h1>
            <h1>2211cs010324</h1>
            <b> My name is Guna Vardhan, and I am currently pursuingmy Bachelor of Technology (B.Tech)</b>
            <b>in MALLA REDDY UNIVERSITY</b>
          </div>
        </div>
        <hr />
      </div>
    );
  }
export default week1;