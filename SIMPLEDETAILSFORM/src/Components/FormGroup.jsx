import React, { useState } from "react";
import Inputfileds from "./Inputfileds";
import { formFields, states, genderOptions } from "./Data";


const FormGroup = () => {
    const [data, setData] = useState(null);

    console.log(typeof data);
    const [showData, setShowData] = useState([]);

    const handleChange = (checkValue, e) => {
        const { name, value } = e.target;
        if (checkValue.type === "checkbox") {
            let selectitem = data?.[name] ?? [];

            // console.log(selectitem[0], "selectitem");
            let isexist = selectitem.some((ele) => ele === value);
            if (isexist) {
                selectitem = selectitem.filter((val) => val !== value);
            } else {
                selectitem.push(value);
            }
            setData((prev) => ({ ...prev, [name]: selectitem }));
        } else {
            setData((pre) => ({
                ...pre,
                [name]: value,
            }));
        }
    };

    const handleSubmit = () => {
        setShowData((prev) => [...prev, data]);
        setData(null);
    };


    const getOptions = (field) => {
        if (field.name === "gender") {
            return genderOptions;
        } else if (field.name === "state") {
            return states;
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
            <div className="w-50 mx-auto border p-5">
                <div className="">
                    {formFields.map((field) => (
                        <Inputfileds
                            field={field}
                            inputvalue={data}
                            onchangecb={(e) => handleChange(field, e)}
                            options={getOptions(field)}
                        />
                    ))}
                </div>
                <div className="text-center  mx-auto mt-3">
                    <button
                        className=" btn btn-success px-5"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>

            <div className="container-fluid mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            {formFields.map((ele) => (
                                <th>{ele.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {showData.map((field) => (
                            <tr>
                                {formFields.map((head) => (
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

export default FormGroup;
