import React from "react";

const LabelGroup = ({ children, name, title, required }) => {
    return (
        <div className="d-flex w-100 p-3 px-5 justify-content-between">
            <label
                className="bg-secondary text-white px-2 p-1 mx-5 rounded"
                style={{ width: "300px", fontSize: "14px" }}
                htmlFor={name}>
                {title}
                {required ? (
                    <span className="text-danger h5" style={{ fontWeight: "800" }}>
                        *
                    </span>
                ) : null}
            </label>
            {children}
        </div>
    );
};

export default LabelGroup;
