import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import InputGroup from "./InputGroup";
import moment from "moment";
import { formfields } from "./Data";
import { intialvalue } from "./Data";
import { countries } from "./Data";
import { indiaStates } from "./Data";
import { relationTypes } from "./Data";
import { cast } from "./Data";
import { rajasthanDistricts } from "./Data";
import { jaipurPoliceStations } from "./Data";



const getOptions = (field) => {
    if (field.name === "country") {
        return countries;
    } else if (field.name === "state") {
        return indiaStates;
    } else if (field.name === "district") {
        return rajasthanDistricts;
    } else if (field.name === "policestation") {
        return jaipurPoliceStations;
    } else if (field.name === "relationtype") {
        return relationTypes;
    } else if (field.name === "complainttype") {
        return cast;
    }
};

const Form = () => {
    const [data, setData] = useState(intialvalue);
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({
            ...pre,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            data.firstname == "" ||
            data.middlename == "" ||
            data.lastname == ""
        ) {
            alert("please fill up required fields");
            return;
        }
        setValue((prev) => [...prev, data]);
        setData(intialvalue);
    };
    console.log(value);

    const getData = (field, head) => {
        if (head.type === "date") {
            return moment(field?.[head.name]).format("DD/HH/YYYY");
        } else if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else {
            return field?.[head.name];
        }
    };

    return (
        <div>
            <div className="w-50   gap-5 border mx-auto mt-1 rounded-4 justify-content-between p-2">
                <h1 className="text-center text-danger mb-4">शिकायत</h1>
                <div className=" row">
                    {formfields.map((field, index) => {
                        return (
                            <div
                                key={index}
                                className=" col-md-6 py-2 align-items-center ">
                                <InputGroup
                                    field={field}
                                    onchangecb={handleChange}
                                    formvalue={data}
                                    options={getOptions(field)}
                                />
                            </div>
                        );
                    })}

                    <button className="btn btn-success" onClick={handleSubmit}>
                        submit
                    </button>
                </div>
            </div>

            <div className="containner mb-5 mt-5">
                <table className="table rounded-4">
                    <thead>
                        <tr>
                            {formfields.map((ele, index) => {
                                return <th key={index}>{ele.title}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((field) => {
                            return (
                                <tr>
                                    {formfields.map((head) => {
                                        return <td>{getData(field, head)}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Form;
