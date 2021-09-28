import React, { useState } from "react";

export default function CashRegister({ handleChange }) {
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);
  let [message, setMessage] = useState("");
  const validate = () => {

    if ((cash-bill)>0 && (bill > 0) && (cash > 0) ) {
      return true;
    }
    return false;
  };

  const changeCash = (event) => {
    setCash(event.target.value);
  };

  const changeBill = (event) => {
    setBill(event.target.value);
  };

  const calculateChange = () => {
    const valid = validate();
    if (valid) {
      handleChange(cash - bill);
      setMessage("Return amount: "+(cash-bill));
    } else {
      if (bill === cash) {
        setMessage("NO CHANGE NEEDED");
      } else {
        console.log("invalid");
        setMessage("invalid amount entered");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center text-center">
      <div className="form">
        <div className="form-group mt-5">
          <label>Enter Bill Amount</label>
          <input
            placeholder="Bill Amount"
            type="bill"
            value={bill}
            onChange={changeBill}
            className="form-control mt-2"
            id="bill"
          />
        </div>
        <div className="form-group mt-5">
          <label>Cash Given By Customer </label>
          <input
            placeholder="Cash Given"
            type="text"
            value={cash}
            onChange={changeCash}
            className="form-control mt-2"
            id="cash"
          />
        </div>

        <button className="btn btn-primary mt-2" onClick={calculateChange}>
          GET CHANGE
        </button>
        <h4 className="mt-4">{message}</h4>
      </div>
    </div>
  );
}
