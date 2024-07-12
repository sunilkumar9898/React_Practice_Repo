import React from 'react'

const Formlabel = ({ children, name, title,required }) => {
    return (
        <div>
            <label htmlFor={name} className="w-25 ">
                {title} {required ? <span className='text-danger'>*</span> : null }
            </label>
            {children}
        </div>
    );
};

export default Formlabel
