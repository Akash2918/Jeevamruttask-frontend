import React, { useState } from 'react';

function Form({ sendData }) {
    
    const getTodaysDate = () => {
        // let today = new Date().toLocaleDateString();
        // return today;
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const [date, setDate] = useState(getTodaysDate());
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [reason, setReason] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    // const [highlight, setHighlight] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(completeForm);
        sendData(completeForm)
        setDate(getTodaysDate());
        setLastName('');
        setFirstName('');
        setMiddleName('');
        setReason('');
        setPhone('');
        setAddress('');
        setEmail('');
    }

    // const clearInputs = () => {
    //     setDate(getTodaysDate());
    //     setLastName('');
    //     setFirstName('');
    //     setMiddleName('');
    //     setReason('');
    //     setPhone('');
    //     setAddress('');
    //     setEmail('');
    // }

    const completeForm = {
        date : date,
        name: lastName + ' ' + firstName + ' ' + middleName,
        reason: reason,
        phone: phone,
        address: address,
        email: email,
    }



    return (
        <form onSubmit={e => formSubmit(e)}>
            <div>
                <label>Date:</label>
                <input type='date' onChange={e => setDate(e.target.value)} value={date}  required/>
            </div>
            <div>
                <label>Full Name:</label>
                <input type='text'
                 value={lastName}
                 onChange={e => setLastName(e.target.value)}
                 placeholder='Last Name'
                 required/>
                <input type='text'
                 value={firstName}
                 onChange={e => setFirstName(e.target.value)}
                 placeholder='First Name'
                 required/>
                <input type='text'
                 value={middleName}
                 onChange={e => setMiddleName(e.target.value)}
                 placeholder='Middle Name'
                 required/>
            </div>
            <div>
                <label>Reason : </label>
                <textarea onChange={e=>setReason(e.target.value)}
                    value={reason}
                    width='100%'
                    placeholder='Enter your reason ...'
                    required>

                </textarea>
            </div>
            <div>
                <label>Phone Number :</label>
                <input type='tel'
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                    placeholder='0000000000' />
            </div>
            <div>
                <label>Address :</label>
                <textarea 
                    value={address}
                    onChange={e=>setAddress(e.target.value)}
                    placeholder='Enter your address ...'
                    required>

                </textarea>
            </div>
            <div>
                <label>Email : </label>
                <input type='email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Enter your email ...'
                    required/>
            </div>
            <div>
                <input type='submit' className='btnClass' value='Submit' />
                {/* <button className="btnClass" onClick={clearInputs()}>Clear</button> */}
            </div>
        </form>
    )
}


export default Form;