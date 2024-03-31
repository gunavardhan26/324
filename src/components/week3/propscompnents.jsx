import React from "react";

const propscompnents=(props)=>{
    return(
        <div>
            <div>
                <h2><u>Using props render one attribute</u></h2>
                <h2 className="text-danger">Hello,
                <span style={{color:'blue'}}>{props.name}</span>
                </h2>
            </div>
            <div>
                <h2><u>Using props render multiple attribute</u></h2>
                <h2 className="text-danger">Hello,<span style={{color:'blue'}}>{props.name}</span></h2>
                <h2 className="text-danger">Your Hall-ticket No. is:
                <span style={{color:'blue'}}>{props.hallticket}</span></h2>
            </div>
        </div>
    );
}
export default propscompnents;