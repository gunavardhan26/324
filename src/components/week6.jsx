import React from "react";
import './week6/week6.css';
import ConditionalRendering from "./week6/ConditionalRendering";
import List from "./week6/List";

function week6(){
    return(
        <div className="week6">
            <h2 style={{color:'#EEF1F6'}}>Week - 6: Create React App and Show Multiple Components using Conditional Rendering & List</h2>
                <ConditionalRendering/>
                <br/>
                <List/>
        </div>
    );
}
export default week6;