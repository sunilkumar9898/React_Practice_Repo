import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import React, { useRef, useState } from "react";
import InputField from "./InputField";
import moment from "moment";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

const formFileds = [
    {
        name: "name",
        type: "text",
        placeholder: "Please enter apllicant name",
        title: "Applicant Name",
        required: true,
    },
    {
        name: "mname",
        type: "text",
        placeholder: "Please enter Father Name",
        title: " Father Name",
    },
    {
        name: "fname",
        type: "text",
        placeholder: "Please enter Mother Name",
        title: "Mother  Name",
        required: true,
    },

    {
        name: "dob",
        type: "date",
        placeholder: "DD/MM/YYYY",
        title: "Date Of Birth",
    },
    {
        name: "religion",
        type: "dropdown",
        placeholder: "------select---------",
        title: "Religion",
        optionLabel: "name",
        optionValue: "name",
    },
    {
        name: "chechbox",
        type: "checkbox",
        title: "Course",
        categories: [
            { name: "Accounting", key: "A" },
            { name: "Marketing", key: "M" },
            { name: "Production", key: "P" },
            { name: "Research", key: "R" },
        ],
    },
];

const religios = [{ name: "Hindu" }, { name: "Muslim" }, { name: "Sikh" }];

const intialValue = {
    name: "",
    fname: "",
    mname: "",
    dob: "",
    religion: "",
    chechbox:[]
};
const Form = () => {
    const toast = useRef(null);
    const [data, setData] = useState(intialValue);
    const [value, setValue] = useState([]);
    console.log(value);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({
            ...pre,
            [name]: value,
        }));
    };

    
    const handleSubmit = () => {
        let validInput = formFileds.some(
            (ele) => ele.required && !data[ele.name]
        );
        if (validInput) {
            toast.current.show({
                severity: "warn",
                summary: "Info",
                detail: "Please Fill Up All Fields",
            });
            return;
        } else {
            toast.current.show({
                severity: "success",
                summary: "Info",
                detail: "Success",
                life: 5000,
            });
            setValue((prev) => [...prev, data]);
            setData(intialValue);
        }
    };
    const getOptions = (field) => {
        if (field.name === "religion") {
            return religios;
        }
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="w-50 mx-auto border">
                <div className="flex my-2 flex-wrap align-items-center mb-3 gap-2 w-100 p-5  ">
                    {formFileds.map((field) => {
                        return (
                            <InputField
                                key={field.name}
                                field={field}
                                onchangecb={handleChange}
                                formValue={data}
                                options={getOptions(field)}
                            />
                        );
                    })}
                    <div className="d-flex mx-auto justify-content-center mt-3">
                        <button
                            className=" px-5 text-center mx-auto w-50 btn btn-success"
                            onClick={handleSubmit}>
                            submit
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                {value.map((ele) => {
                    return <p>{ele.name}</p>;
                })}
            </div>
        </>
    );
};

export default Form;
