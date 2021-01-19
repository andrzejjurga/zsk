import React, { useState } from 'react'



const Customer = () => {

    const [customerState, setCustomerState] = useState({
       
        pickedName: 'Martin'
    });

    const [namesState, setNamesState] =useState({ names: ['Martin', 'Andrea', 'Carol']});

    const switchName = () => {
        const namePool = namesState.names;
        const number = Math.floor(Math.random()*3);
        setCustomerState({pickedName: namePool[number]});
    }

    return (
        <div>
            <h2>Customer:</h2>
            <h3>{customerState.pickedName}</h3>
            <button onClick={switchName}>Change name</button>
        </div>
    );
}

export default Customer;