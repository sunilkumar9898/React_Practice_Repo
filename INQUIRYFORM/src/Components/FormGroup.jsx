import React, { useState } from "react";
import { inputFields } from "./Data";
import { addressFields } from "./Data";
import InputField from "./InputField";
import { Religions } from "./Data";
import { Categorie } from "./Data";
import { CasteTrib } from "./Data";
import { Countries } from "./Data";
import { Districts } from "./Data";
import { PoliceStations } from "./Data";
import { States } from "./Data";
console.log(CasteTrib);

console.log(Religions);

const intialValue = {
    HCR: "",
    UID: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Nationality: "",
    TelephoneNumber: "",
    Nickname: "",
    Religion: "",
    CasteTribe: "",
    Category: "",
    MobileNumber: "",
    Email: "",
    HouseNumber: "",
    StreetName: "",
    Locality: "",
    VillageTownCity: "",
    TehsilBlock: "",
    ForCurrentAddress: "",
    Country: "",
    State: "",
    District: "",
    PoliceStation: "",
    PinCode: "",
};
const FormGroup = () => {
    const [data, setData] = useState(intialValue);
    const [showdata, setShowdata] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        let validInput = [...inputFields, ...addressFields].some(
            (ele) => ele.required && !data[ele.name]
        );
        if (validInput) {
            alert("please fillup all fileds");
            return;
        } else {
            setShowdata((pre) => [...pre, data]);
            setData(intialValue);
            console.log(data, "123");
        }
    };

    const getOptions = (field) => {
        if (field.name === "Religion") {
            return Religions;
        } else if (field.name === "Category") {
            return Categorie;
        } else if (field.name === "CasteTribe") {
            return CasteTrib;
        } else if (field.name === "Country") {
            return Countries;
        } else if (field.name === "District") {
            return Districts;
        } else if (field.name === "PoliceStation") {
            return PoliceStations;
        } else if (field.name === "State") {
            return States;
        }
    };

    const getData = (field, head) => {
        if (head.type === "dropdown") {
            return field?.[head.name]?.name;
        } else if (field.type === "radio") {
            return field?.[head.name]?.name;
        } else {
            return field?.[head.name];
        }
    };

    return (
        <>
            {/* <div className=" p-2 w-25 bg-secondary mx-auto text-center mb-4 mt-3 rounded">
                <span className=" py-1 text-white text-center ">
                    पूछताछ रिपोर्ट फ़ार्म
                </span>
            </div> */}

            <div className="w-75 px-5 mx-auto py-2 border ">
                <div className=" w-100  d-flex  d-flex justify-content-between">
                    <div className="w-50 px-5 ">
                        {inputFields.map((field, index) => {
                            return (
                                <div key={index}>
                                    <InputField
                                        field={field}
                                        onchangeCb={handleChange}
                                        inputValue={data}
                                        options={getOptions(field)}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-50 px-5">
                        {addressFields.map((field, index) => {
                            return (
                                <div key={index}>
                                    <InputField
                                        field={field}
                                        onchangeCb={handleChange}
                                        inputValue={data}
                                        options={getOptions(field)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-5 mt-5">
                    <button
                        className="btn btn-success text-center  w-25"
                        onClick={handleSubmit}>
                        submit
                    </button>
                </div>
            </div>

            <div className="container-fluid mt-5 px-5 table-responsive">
                <table className="table w-100 text-center  table-hover   table-bordered">
                    <thead>
                        <tr className=" row" style={{ fontSize: "12px" }}>
                            {[...inputFields, ...addressFields].map((ele) => {
                                return <th className="col">{ele.title}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {showdata.map((field) => (
                            <tr className="row " style={{ fontSize: "12px" }}>
                                {[...inputFields, ...addressFields].map(
                                    (head) => {
                                        return (
                                            <td className="col">
                                                {getData(field, head)}
                                            </td>
                                        );
                                    }
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FormGroup;
