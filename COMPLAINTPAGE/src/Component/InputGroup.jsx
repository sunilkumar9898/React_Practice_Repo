import React from "react";
import LabelGroup from "./LabelGroup";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";

const InputGroup = ({ onchangecb, field, formvalue, options = [] }) => {
    return (
        <div>
        <LabelGroup name={field.name} title={field.title} required={field.required} >

                {["text", "email", "password", "number"]?.includes(
                    field.type
                ) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formvalue?.[field.name]}
                        onChange={onchangecb}
                        className="w-100"
                    />
                ) : null}
                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        title={field.title}
                        placeholder={field.placeholder}
                        value={formvalue?.[field.name]}
                        type={field.type}
                        onChange={onchangecb}
                        className="w-100"
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                        options={options}
                    />
                ) : null}
                {field.type === "date" ? (
                    <Calendar
                        name={field.name}
                        title={field.title}
                        placeholder={field.placeholder}
                        value={formvalue?.[field.name]}
                        type={field.type}
                        className="w-100"
                    />
                ) : null}
                {field.type === "textarea" ? (
                    <InputTextarea
                        name={field.name}
                        value={formvalue?.[field.name] ?? ""}
                        onChange={onchangecb}
                        rows={2}
                        cols={50}
                        type={field.type}
                        placeholder={field.placeholder}
                    />
                ) : null}
            </LabelGroup>
        </div>
    );
};

export default InputGroup;
