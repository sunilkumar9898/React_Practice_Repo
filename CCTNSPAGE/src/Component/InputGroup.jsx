import React from "react";
import Labelgroup from "./Labelgroup";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
];

const relations = [
    { name: "Father", code: "F" },
    { name: "Mother", code: "M" },
    { name: "Brother", code: "B" },
    { name: "Sister", code: "S" },
];

const genders = [
    { name: "Male", code: "M" },
    { name: "Female", code: "F" },
    { name: "Other", code: "O" },
];


const InputGroup = ({ field, onchangecb, formvalue }) => {
    return (
        <div>
            <Labelgroup name={field.name} title={field.title}>
                {["text", "email", "password"]?.includes(field.type) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={onchangecb}
                        value={formvalue?.[field.name] ?? ""}
                        className="w-100"
                    />
                ) : null}
                {field.type === "date" ? (
                    <Calendar
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={onchangecb}
                        value={formvalue?.[field.name] ?? ""}
                        className="w-100"
                    />
                ) : null}
                {field.type === "dropdown"  ?  (
            <Dropdown

                        options={relations}
                        optionLabel="name"
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={onchangecb}
                        value={formvalue?.[field.name] ?? ""}
                        className="w-100"
                    />
                ) : null}
            </Labelgroup>
        </div>
    );
};

export default InputGroup;
