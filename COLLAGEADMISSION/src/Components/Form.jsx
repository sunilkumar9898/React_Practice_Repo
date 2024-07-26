import React, { useState } from "react";
import { formFields } from "./Data";
import InputField from "./InputField";
import { indiaStates } from "./Data";
const intialValue = {
    name: "",
    father_name: "",
    mother_name: "",
    email_address: "",
    state: "",
    gender: "",
};

const Form = () => {
    const [data, SetData] = useState(intialValue);
    const [showdata, setShowdata] = useState([]);

    const handleChange = (checkValue, e) => {
        const { name, value } = e.target;
        if (checkValue.type === "checkbox") {
            let selectitem = data?.[name] ?? [];
            let isexist = selectitem.some((ele) => ele === value);
            if (isexist) {
                selectitem = selectitem.filter((val) => val !== value);
            } else {
                selectitem.push(value);
            }
            SetData((prev) => ({ ...prev, [name]: selectitem }));
        } else {
            SetData((pre) => ({
                ...pre,
                [name]: value,
            }));
        }
    };

    const handleSubmit = () => {
        let validInput = formFields.some(
            (ele) => ele.required && !data[ele.name]
        );
        if (validInput) {
            alert("please fill up all input value");
            return
        } else {
            setShowdata((prev) => [...prev, data]);
            SetData(intialValue);
            alert("success");
        }
    };
    console.log(data);
    const getOptions = (field) => {
        if (field.name === "state") {
            return indiaStates;
        }
    };

    const getData = (field, head) => {
        if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else {
            return field?.[head.name];
        }
    };
    return (
        <>
            <div
                className="w-50 mx-auto border  mt-5"
                style={{ margin: "auto" }}>
                <div className="mt-5 w-75 mx-auto ">
                    {formFields.map((field, index) => (
                        <div key={index}>
                            <InputField
                                field={field}
                                onchangecb={(e) => handleChange(field, e)}
                                formVlaue={data}
                                options={getOptions(field)}
                            />
                        </div>
                    ))}
                    <div className="d-flex justify-content-center m-4">
                        <button
                            className="btn btn-primary text-center px-5"
                            onClick={handleSubmit}>
                            submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-75 mx-auto ">
                <table className="table table-hover table-dark mt-5  table-bordered">
                    <thead>
                        <tr className="text-center">
                            {formFields.map((ele) => (
                                <th>{ele.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {showdata.map((field) => (
                            <tr className="text-center">
                                {formFields.map((head) => {
                                    return (
                                        <td className="p-1">
                                            {getData(field, head)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Form;
