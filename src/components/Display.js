import React from 'react';
import Form from './Form';
// import Table from './Table';
import '../index.css';

function Display({ sendData }){
    return (
        <div className='displayPart'>
            {/* <h1>Fill the form</h1> */}
            <Form sendData={ sendData } />
        </div>
    )
}


export default Display;
