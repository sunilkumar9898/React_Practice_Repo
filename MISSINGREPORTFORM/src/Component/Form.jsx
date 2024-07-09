import React, { useState } from "react";
import Inputgroup from "./Inputgroup";
import moment from "moment";

const formFields = [
    {
        name: "username",
        title: "प्रथम नाम",
        type: "text",
        placeholder: "प्रथम नाम",
    },
    {
        name: "password",
        title: "मध्य नाम",
        type: "text",
        placeholder: "मध्य नाम",
    },
    {
        name: "email",
        title: "अंतिम नाम",
        type: "text",
        placeholder: "अंतिम नाम",
    },
    {
        name: "dob",
        title: "जन्म तिथि",
        type: "date",
        placeholder: "जन्म तिथि",
    },

    {
        name: "relation",
        title: "संबंध प्रकार",
        optionLabel: "name",
        optionValue: "name",
        type: "dropdown",
        placeholder: "------संबंध प्रकार-------",
    },
];

const formFields2 = [
    {
        name: "homenumber",
        type: "text",
        placeholder: "मकान सं",
        title: "मकान सं",
    },
    {
        name: "roadnumber",
        type: "text",
        placeholder: "सड़क का नाम",
        title: "सड़क का नाम",
    },
    {
        name: "country",
        type: "dropdown",
        placeholder: "देश",
        title: "देश",
        optionLabel: "name",
        optionValue: "name",
    },
    {
        name: "state",
        type: "dropdown",
        placeholder: "राज्य",
        title: "राज्य",
        optionLabel: "name",
        optionValue: "name",
    },
];

const initialValue = {
    username: "",
    password: "",
    email: "",
    dob: "",
    relation: "",
    homenumber: "",
    roadnumber: "",
    country: "",
    state: "",
};
const relations = [{ name: "father" }, { name: "mother" }, { name: "brother" }];
const countries = [
    { name: "Australia" },
    { name: "South Africa" },
    { name: "India" },
    { name: "America" },
];
const states = [
    { name: "Uttar Pardesh " },
    { name: "Rajasthan " },
    { name: "Punjab" },
    { name: "Delhi" },
];
const Form = () => {
    const [data, setData] = useState(initialValue);
    console.log(data);
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const _data = data;
        setValue((prev) => [...prev, _data]);
        setData(initialValue);
    };
    console.log(value);

    const getoptions = (field) => {
        if (field.name === "relation") {
            return relations;
        } else if (field.name === "country") {
            return countries;
        } else if (field.name === "state") {
            return states;
        }
    };

    // const getData = (field, head) => {
    //     if (head.type === "date") {
    //         return moment(field?.[head.name]).format("DD/MM/YYYY hh:mm A");
    //     }
    //     return field?.[head.name]

    // }

    return (
        <div>
            <div className="container mx-auto form1">
                <h1 className="text-primary text-center">
                    Missing Person Report
                </h1>
                <div className="d-flex flex-column px-5 w-50 mx-auto">
                    {[...formFields, ...formFields2].map((field, index) => {
                        return (
                            <div key={index}>
                                <Inputgroup
                                    field={field}
                                    onchangecb={handleChange}
                                    formvalue={data}
                                    options={getoptions(field)}
                                />
                            </div>
                        );
                    })}

                    {/* {formFields.map((field, index) => (
                        <div key={index}>
                            <Inputgroup
                                field={field}
                                onchangecb={handleChange}
                                formvalue={data}
                                options={getoptions(field)}
                            />
                        </div>
                    ))}
                    {formFields2.map((field, index) => (
                        <div key={index}>
                            <Inputgroup
                                field={field}
                                onchangecb={handleChange}
                                formvalue={data}
                                options={getoptions(field)}
                            />
                        </div>
                    ))} */}

                    <br />
                    <button className="btn btn-success" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>

            <div className="container mt-5 w-50 mb-5">
                <table border={{ border: "1px solid black" }}>
                    <thead>
                        <tr>
                            {[...formFields, ...formFields2].map((ele,index) => {
                                return <th key={index}>{ele.title}</th>;
                            })}
                            {/* {formFields.map((ele) => {
                                return <th>{ele.title}</th>;
                            })}
                            {formFields2.map((ele) => {
                                return <th>{ele.title}</th>;
                            })} */}
                        </tr>
                    </thead>
                    <tbody className="mb-5">
                        {value.map((field) => {
                            return (
                                <tr>
                                    {[...formFields, ...formFields2].map(
                                        (head) => {
                                            return (
                                                <th>
                                                    {head.type === "date"
                                                        ? moment(
                                                              field?.[head.name]
                                                          ).format("DD/MM/YYYY")
                                                        : head.type ===
                                                          "dropdown"
                                                        ? field?.[head.name]
                                                              ?.name
                                                        : field?.[head.name]}
                                                </th>
                                                // <th>{ getData (field,head)}</th>
                                            );
                                        }
                                    )}

                                    {/* <td>{ele.username}</td>
                                    <td>{ele.password}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.relation?.name}</td>
                                    <td>
                                        {moment(ele.dob).format("DD/MM/YYYY")}
                                    </td>
                                    <td>{ele.homenumber}</td>
                                    <td>{ele.roadnumber}</td>
                                    <td>{ele.country?.name}</td>
                                    <td>{ele.state?.name}</td> */}
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
