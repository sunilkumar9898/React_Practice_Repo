import React from "react";
import Labelgroup from "./Labelgroup";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const InputGroup = ({ field, onchangecb, formvalue, options = [] }) => {
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
                {field.type === "dropdown" ? (
                    <Dropdown
                        options={options}
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
