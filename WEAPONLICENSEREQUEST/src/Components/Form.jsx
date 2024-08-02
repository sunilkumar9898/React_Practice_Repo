import React, { useRef, useState } from "react";
import {
    labelnames,
    labelnames1,
    addressFields,
    addressFields1,
    initialValues,
    genders,
    occupations,
    relationshipTypes,
    policeStations,
    districts,
    states,
    countries,
} from "./data";
import Inputgroup from "./Inputgroup";
import { Toast } from "primereact/toast";
import moment from "moment";
const Form = () => {
    const toast = useRef(null);
    const [data, setData] = useState(initialValues);
    const [showData, setshowData] = useState([]);

    const handleChange = (field, e) => {
        let value = field.type === "number" ? e.value : e.target.value;
        setData((pre) => ({
            ...pre,
            [field.name]: value,
        }));
    };
    console.log(data);
    const handleSubmit = () => {
        let validInput = [
            ...labelnames,
            ...labelnames1,
            ...addressFields,
            ...addressFields1,
        ].filter((ele) => ele.required && !data[ele.name]);

        if (validInput.length > 0) {
            for (let ele of validInput) {
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: `Please Enter ${ele.title}`,
                    life: 3000,
                });
                return;
            }
        } else {
            setshowData((prev) => [...prev, data]);
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: `Successfully Submitted`,
                life: 3000,
            });
            setData(initialValues);
        }
    };
    console.log(showData);

    const getOptions = (field) => {
        if (field.name === "relationType") {
            return relationshipTypes;
        } else if (field.name === "occupation") {
            return occupations;
        } else if (field.name === "gender") {
            return genders;
        } else if (field.name === "country") {
            return countries;
        } else if (field.name === "state") {
            return states;
        } else if (field.name === "district") {
            return districts;
        } else if (field.name === "policeStation") {
            return policeStations;
        }
    };

    const getData = (field, head) => {
        if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else if (head.type === "date") {
            return moment(field?.[head.name]).format('DD/MM/YYYY');
        } else {
            return field?.[head.name];
        }
    };


    return (
        <>
            <Toast ref={toast} />
            <div className="w-75 border p-4 mx-auto">
                <div className="d-flex  gap-5  justify-content-between">
                    <div className="w-50">
                        {labelnames.map((field) => (
                            <Inputgroup
                                field={field}
                                inputvalue={data}
                                onchangecb={(e) => handleChange(field, e)}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                    <div className="w-50">
                        {labelnames1.map((field) => (
                            <Inputgroup
                                field={field}
                                inputvalue={data}
                                onchangecb={(e) => handleChange(field, e)}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                </div>

                <div className="d-flex  gap-5  justify-content-between">
                    <div className="w-50">
                        {addressFields.map((field) => (
                            <Inputgroup
                                field={field}
                                inputvalue={data}
                                onchangecb={(e) => handleChange(field, e)}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                    <div className="w-50">
                        {addressFields1.map((field) => (
                            <Inputgroup
                                field={field}
                                inputvalue={data}
                                onchangecb={(e) => handleChange(field, e)}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center p-2 ">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-success p-2 w-25 px-5">
                        Submit
                    </button>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <table className="table">
                    <thead>
                        <tr className="bg-info">
                            {[
                                ...labelnames,
                                ...labelnames1,
                                ...addressFields,
                                ...addressFields1,
                            ].map((ele) => {
                                return <th className="bg-info">{ele.title}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: "10px" }}>
                        {showData.map((field) => {
                            return (
                                <tr>
                                    {[
                                        ...labelnames,
                                        ...labelnames1,
                                        ...addressFields,
                                        ...addressFields1,
                                    ].map((head) => (
                                        <td>{getData(field, head)}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Form;
