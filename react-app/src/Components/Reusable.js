import React from 'react'
// import { Message } from 'primereact/message';
// import { InputText } from 'primereact/inputtext';

const Reusable = ({ children, name, title }) => {
    return (
        <div className='py-2 d-flex align-items-center'>
            <label style={{ width: "200px" }} htmlFor={name} >{title}  </label>
            {children}
        </div>
    )
}

export default Reusable
