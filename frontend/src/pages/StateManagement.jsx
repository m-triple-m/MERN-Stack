import React, { useState } from 'react'

const StateManagement = () => {

    const name = "Lestrade";
    const email = "lestrade@mail.com";

    // let count = 0;
    const [count, setCount] = useState(0);

    const [inputValue, setInputValue] = useState('Write Something');
    const [bgColor, setBgColor] = useState('#000000');

    const inlineStyles = {
        fontSize: 24,
        color: 'red'
    }

    const getFirstName = (fullName) => {
        return fullName.split(' ')[0];
    }

    return (
        <div style={{ backgroundColor: bgColor }} className={`dark:bg-slate-800 dark:text-white min-h-screen`}>
            <div className='container mx-auto py-4'>
                <h1 className='text-center font-bold text-3xl dark:text-violet-400'>State Management</h1>
                <p style={inlineStyles}>Inline CSS</p>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Another Name : {getFirstName('Sherlock Holmes')}</p>

                <p>{'Name of the User is ' + getFirstName('Leon Kennedy') + ' and email is leon@mail.com'}</p>

                <h2 className='text-xl font-bold mt-5'>Count : {count}</h2>

                <button
                    onClick={() => {
                        setCount(count + 1); console.log(count);
                    }}
                    className='bg-violet-600 dark:bg-violet-400 text-white px-3 py-1 rounded hover:bg-violet-700 duration-300 disabled:bg-gray-300'>Increase Count</button>

                <input
                    value={inputValue}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setInputValue(e.target.value)
                    }}
                    type="text" className='border rounded p-2 block mt-5' />

                <p className='mt-10 text-3xl'>Your Input : {inputValue}</p>

                <input
                    value={bgColor}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setBgColor(e.target.value)
                    }}
                    type="color" className='mt-10' />
            </div>
        </div>
    )
}

export default StateManagement;