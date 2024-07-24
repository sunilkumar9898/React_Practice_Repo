import React from "react";

const LableGroup = ({ children, name, title, required }) => {
    return (
        <div className="d-flex p-2">
            <label
                style={{ width: "190px",backgroundColor:`var(--blue-300)` }}
                className=" px-2 p-1 mx-2 text-white"
                htmlFor={name}>
                {title} {required ? <span className="text-danger" style={{fontWeight:"800"}}>*</span> : null}
            </label>
            {children}
        </div>
    );
};

export default LableGroup;
