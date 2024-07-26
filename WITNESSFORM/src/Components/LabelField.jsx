import React from "react";

const LabelField = ({ children, name, title, required }) => {
    return (
        <div className="d-flex  p-2 ">
            <label
                className="bg-primary mx-4 p-2 text-white"
                style={{ width: "220px " }}
                htmlFor={name}>
                {title}
            </label>
            {children}
            {required ? <span className="text-danger h4">*</span> : null}
        </div>
    );
};

export default LabelField;
