import React from 'react';

function DebitDescription(props){
    return (
        <div>
            <h2>{props.description}</h2>
            <p>Amount: {props.amount}</p>
            <p>Date : {props.date}</p>
        </div>
    )
}

export default DebitDescription;


