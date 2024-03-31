import React, { useState } from "react";
import './week6.css';

function ConditionalRendering() {
    const [isLogedin, setlogin] = useState(false);
    const [swith, setswith] = useState("Select your role");

    const handle = () => {
        setlogin(!isLogedin);
    }

    const Welcome = () => {
        return (
            <div>
                <h6>You Have successfully logged in...</h6>
                <button onClick={handle}>Logout</button>
            </div>
        );
    }

    const Login = () => {
        return (
            <div>
                <h6>Please login.</h6>
                <button onClick={handle}>Login</button>
            </div>
        );
    }

    const Ternary = () => {
        return (
            <div>
                {isLogedin ? <Welcome /> : <Login />}
            </div>
        );
    }

    const Logical = () => {
        return (
            <div>
                {!isLogedin && <h5>Please login.</h5>}
                {isLogedin && <h5>You Have successfully logged in...</h5>}
            </div>
        );
    }

    const IfElse = () => {
        if (isLogedin) {
            return <h5>You Have successfully logged in...</h5>;
        } else {
            return <h5>Please login.</h5>;
        }
    }

    const SwitchCase = () => {
        switch (swith) {
            case "admin":
                return (
                    <div>
                        <h6>This is admin module...</h6>
                        <button onClick={() => setswith("user")}>Switch to User</button>
                    </div>
                );
            case "user":
                return (
                    <div>
                        <h6>This is user module...</h6>
                        <button onClick={() => setswith("admin")}>Switch to Admin</button>
                    </div>
                );
            default:
                return (
                    <div>
                        <h6>Please select your role.</h6>
                        <button onClick={() => setswith("user")} style={{margin:'10px'}}>User</button>
                        <button onClick={() => setswith("admin")}>Admin</button>
                    </div>
                );
        }
    }

    return (
        <div className="Container-1">
            <br/>
            <h4>Conditional Rendering:</h4>
            <br/>
            <div className="Container-2">
                <h5> Rendeing WelcomeComponent or LoginComponent based on TernaryOperator</h5>
            <Ternary />
            </div>
            <br/>
            <div className="Container-2">
                <h5>Rendeing WelcomeComponent using LogicalOperator.</h5>
            <Logical />
            </div>
            <br/>
            <div className="Container-2">
                <h5>Rending a Component of WelcomeComponent or LoginComponent using If-Else Condition.</h5>
            <IfElse />
            </div>
            <br/>
            <div className="Container-2">
            <SwitchCase />
            </div>
            <br/>
        </div>
    );
}

export default ConditionalRendering;
