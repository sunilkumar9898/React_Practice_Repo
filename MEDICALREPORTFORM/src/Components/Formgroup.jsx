import React, { useState } from "react";
import { formFields, specialDoctorsList } from "./Data";
import InputFields from "./InputFields";
import { medicleoption } from "./Data";
import { initialValues } from "./Data";
import { States } from "./Data";
import { Districts } from "./Data";
import { PoliceStations } from "./Data";
import { chicks1 } from "./Data";
const Formgroup = () => {
    const [data, setData] = useState(initialValues);
    const [showdata, setShowData] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name; // This works for text inputs
        const value = e.value ?? e.target.value; // Handle Dropdown case
        setData((pre) => ({
            ...pre,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        let validInput = formFields.filter((ele) => ele.required && !data[ele.name]);
        if (validInput.length>0) {
            for (let element  of validInput) {
                alert(`Please enter: ${element.title || element.name}`);
                break;
        }
        } else {
        setShowData((prev) => [...prev, data]);

        setData(initialValues);
        }

    };
    console.log(showdata);
    const getOPtions = (field) => {
        if (field.name === "MedicoLegalCaseType") {
            return medicleoption;
        } else if (field.name === "State") {
            return States;
        } else if (field.name === "District") {
            return Districts;
        } else if (field.name === "PoliceStation") {
            return PoliceStations;
        } else if (field.name === "chick") {
            return chicks1;
        } else if (field.name === "SpecialDoctor") {
            return specialDoctorsList;
        }
    };

    const getData = (field, head) => {
        if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else if (head.type === "date") {
            return `${field?.[head.name] ?? ""}`;
        } else {
            return field?.[head.name];
        }
    };
    return (
        <div>
            <div className="w-50 mx-auto">
                <div className="text-center  p-3">
                    <span className="h4 mb-4 text-primary">
                        Medicle Report Form{" "}
                    </span>
                </div>
                {formFields.map((field) => (
                    <InputFields
                        key={field.name}
                        field={field}
                        options={getOPtions(field)}
                        onchangecb={handleChange}
                        inputvalue={data}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center mx-auto m-5">
                <button className="btn btn-primary px-5" onClick={handleSubmit}>
                    submit
                </button>
            </div>

            <div className="container-fluid px-5">
                <table class="table table-striped table-hover rounded table-bordered">
                    <thead>
                        <tr className="">
                            {formFields.map((ele) => (
                                <th scope="col">{ele.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {showdata.map((field) => (
                            <tr className="">
                                {formFields.map((head) => {
                                    return (
                                        <td scope="col">
                                            {getData(field, head)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Formgroup;
