import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function Dropdown( { couriers, poType } ){
    const [display, setDisplay] = useState('none');
    const [toName, setToName] = useState("");
    const [fromName, setFromName] = useState("");
    const [poNum, setPoNum] = useState(0);

    function handleClick(){
        if(display == 'none'){
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    const handleToNameChange = (e) => {
        setToName(e.target.value);
    }

    return(
        <div>
            <input className="textBox" type="text" placeholder="TO: First, Last"
                value={toName} onChange={(e) => setToName(e.target.value)} />
            <input className="textBox" type="text" placeholder="FROM: First, Last"
                value={fromName} onChange={(e) => setFromName(e.target.value)} />
            <div className="courier">
                <button className="filterButton "type="button" onClick={handleClick}>
                    Courier
                </button>
            </div>
            <div className="poNum">
                <input className="poInput" type="number" placeholder="PO #"
                value={poNum} onChange={(e) => setPoNum(e.target.value)} />
                <button className="po" type="button" onClick={handleClick}>
                    PO Type
                </button>
            </div>

            <div style={{ display }}>
               { couriers }
            </div>

            <div style={{display}}>
                { poType }
            </div>
        </div>
    );
}

export { Dropdown }