import React from "react";

const LabelField = ({ children, name, title, required }) => {
    return (
        <div className="d-flex  p-2 ">
            <label
                className="bg-primary mx-4 p-2 text-white label"
                htmlFor={name}>
                {title}
                {required ? <span className="text-danger h4">*</span> : null}
            </label>
            {children}
        </div>
    );
};

export default LabelField;
