import React, { useState } from 'react';
import logo from './logo.svg';
import { Dropdown } from './Dropdown.js';
import { Element } from './Element.js';
import { Couriers } from './Couriers.js';
import { PoType } from './PoType.js';

// import DateSelector from './DateSelector.js';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/register",
    {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved!");
      setEmail("");
      setName("");
    }
  }  

  return (
    <div className="App">
      <div>
        <Dropdown couriers = {<Couriers /> } poType = { <PoType /> } />
      </div>
     </div>
  );
}
export default App;
