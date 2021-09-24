import React, { useState } from 'react';
import CashRegister from "../CashRegister/CashRegister";
import Display from '../Display/Display';
import "./DashBoard.css";

export default function DashBoard() {
    const [change, setChange] = useState(0);

    const handleChange = (amount) => {
        setChange(amount);
    }

    return (
        <div className="dashboard self-align-center mt-5">
            <div className="text-center" style={{"height":"10vh"}}>
                <h1>CASH REGISTER APP</h1>
            </div>
            <CashRegister handleChange={handleChange} />
            <Display change={change}/>
        </div>
    )
}