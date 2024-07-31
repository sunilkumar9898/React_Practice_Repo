import React, { useRef } from "react";
import {
    formFields,
    formFields1,
    formFields2,
    maritalStatus,
    occupation,
    citizenship,
    gender,
} from "./Data";
import Inputfield from "./Inputfield";
import { relationshipTypes } from "./Data";
import { useState } from "react";
import { Intialvalue } from "./Data";
import moment from "moment";
import { Toast } from "primereact/toast";

const FormField = () => {
    const toast = useRef(null);
    const [data, setData] = useState(Intialvalue);
    const [showdata, setShowdata] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        let validInput = [...formFields, ...formFields1, ...formFields2].filter(
            (ele) => ele.required && !data[ele.name]
        );
    
        if (validInput.length > 0) {
            for (let element of validInput) {
                toast.current.show({
                    className:'p-4',
                    severity: "warn",
                    summary: "Warning",
                    summary: "warning",
                    detail: ` please enter :  ${element.label}`,
                    life: 1000,
                });
                break;
            }
        } else {
            setShowdata((pre) => [...pre, data]);
                toast.current.show({
                    severity: "success",
                    className: "p-4",
                    summary: "Success",
                    detail: "Data Succefully Submited",
                    life: 3000,
                });
            setData(Intialvalue);
        }
    };

    const getData = (field, head) => {
        if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else if (head.type === "date") {
            return moment(field?.[head.name]).format("DD/MM/YYYY");
        } else if (head.type === "number") {
            return field?.[head.name];
        } else {
            return field?.[head.name];
        }
    };

    const setoptions = (field) => {
        if (field.name === "relationType") {
            return relationshipTypes;
        } else if (field.name === "maritalStatus") {
            return maritalStatus;
        } else if (field.name === "gender") {
            return gender;
        } else if (field.name === "nationality") {
            return citizenship;
        } else if (field.name === "occupation") {
            return occupation;
        }
    };

    //    const show = () => {
    //        toast.current.show({
    //            severity: "info",
    //            summary: "Info",
    //            detail:` please enter :  ${element.label}`,
    //        });
    //    };
    return (
        <>
            <Toast ref={toast} />
            <h1 className="text-center h4 p-4">Witness Form</h1>
            <div className="main_div  rounded p-2">
                <div className="w-100 ">
                    {formFields.map((field) => {
                        return (
                            <div>
                                <div>
                                    <Inputfield
                                        field={field}
                                        onchangecb={handleChange}
                                        inputvalue={data}
                                        options={setoptions(field)}
                                    />
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
                                    <Inputfield
                                        field={field}
                                        onchangecb={handleChange}
                                        inputvalue={data}
                                        options={setoptions(field)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="age_div p-2 mt-5">
                <div className=" age_child_div text-start ">
                    {formFields2.map((field) => {
                        return (
                            <div>
                                <div>
                                    <Inputfield
                                        field={field}
                                        onchangecb={handleChange}
                                        inputvalue={data}
                                        options={setoptions(field)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className=" d-flex align-items-end mb-2 px-2 text-end">
                    <button

                        onClick={handleSubmit}
                        className=" d-flex mx-atuo px-5  btn btn-success ">
                        submit
                    </button>
                </div>
            </div>

            <div className="table_div">
                <table className="table table-bordered ">
                    <thead className="table-dark">
                        <tr>
                            {[
                                ...formFields,
                                ...formFields1,
                                ...formFields2,
                            ].map((ele) => (
                                <th>{ele.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {showdata.map((field) => (
                            <tr>
                                {[
                                    ...formFields,
                                    ...formFields1,
                                    ...formFields2,
                                ].map((head) => (
                                    <td>{getData(field, head)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FormField;
