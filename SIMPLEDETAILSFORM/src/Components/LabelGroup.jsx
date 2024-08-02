import React from "react";

const LabelGroup = ({ children, name, title, required }) => {
    return (
        <div className="d-flex">
            <label style={{width:"180px"}} htmlFor={name}>
                {title}
                {required ? <span className="text-danger h5">*</span> : null}
            </label>
            {children}
        </div>
    );
};

export default LabelGroup;
