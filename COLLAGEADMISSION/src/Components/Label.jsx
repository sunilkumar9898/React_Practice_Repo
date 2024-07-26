import React from "react";

const Label = ({ children, name, title,required }) => {
    return (
        <div className="d-flex">
            <label className="w-25 " htmlFor={name}>
                {title}
                {required ? (<span className="text-danger">*</span>): null}
            </label>
            {children}
        </div>
    );
};

export default Label;
