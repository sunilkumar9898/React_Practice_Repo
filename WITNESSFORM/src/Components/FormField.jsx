import React from "react";
import { formFields, formFields1, formFields2 } from "./Data";
import Inputfield from "./Inputfield";
import { relationshipTypes } from "./Data";
import { useState } from "react";
import { Intialvalue } from "./Data";
const FormField = () => {
    const [data, setData] = useState(Intialvalue);
    const [showdata, setShowdata] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, [name]: value
        }))
    };


    const handleSubmit = (pre) => {
        setShowdata((pre) => [...pre, data])
        setData(Intialvalue)
    }
    return (
        <div className=" w-75 mx-auto gap-5 d-flex justify-content-between">
            <div className="w-100 ">
                {formFields.map((field) => {
                    return (
                        <div>
                            <div>
                                <Inputfield field={field} />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-100">
                {formFields1.map((field) => {
                    return (
                        <div>
                            <div>
                                <Inputfield field={field} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FormField;
