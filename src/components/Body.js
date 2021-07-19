import React from 'react';
import '../index.css'
// import Selector from './Selector';
import Display from './Display';

function Body({ sendData }) {
    // const [display, setDisplay] = useState(true)

    // const changeDisplay = (value) => {
    //     setDisplay(value)
    // }

    return (
        <div className='bodyStyle'>
            {/* <Selector /> */}
            <Display sendData={ sendData } />
        </div>
    )
}


export default Body;