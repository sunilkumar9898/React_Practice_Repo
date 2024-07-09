import React from "react";

const Labelgroup = ({ children, name, title }) => {
    return (
        <div>
            <label className="text-primary" htmlFor={name}>
                {title}
            </label>
            {children}
        </div>
    );
};

export default Labelgroup;
