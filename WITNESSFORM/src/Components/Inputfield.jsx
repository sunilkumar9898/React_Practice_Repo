import React from "react";
import LabelField from "./LabelField";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";

import { InputNumber } from "primereact/inputnumber";
const Inputfield = ({ field, onchangecb, inputvalue, options = [] }) => {

    return (
        <div className="">
            <LabelField
                name={field.name}
                title={field.label}
                required={field.required}>
                {["text", "password", "email"]?.includes(field.type) ? (
                    <InputText
                        name={field.name}
                        value={inputvalue?.[field.name]}
                        onChange={onchangecb}
                        placeholder={field.placeholder}
                        className="w-100 px-2"
                    />
                ) : null}
                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        value={inputvalue?.[field.name]}
                        onChange={onchangecb}
                        options={options}
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                        placeholder={field.placeholder}
                        className="w-100 px-2 d-flex align-items-center "
                    />
                ) : null}
                {field.type === "radio" ? (
                    <div className="d-flex w-100 ">
                        {field.Gender.map((ele) => (
                            <div className="d-inline-flex align-items-center px-4">
                                <RadioButton
                                    inputId={ele.value}
                                    name={field.name}
                                    value={ele.value}
                                    onChange={onchangecb}
                                    checked={
                                        inputvalue?.[field.name] === ele.value
                                    }
                                    className="w-100"
                                />
                                <label htmlFor={ele.key} className="ml-2">
                                    {ele.name}
                                </label>
                            </div>
                        ))}
                    </div>
                ) : null}

                {field.type === "date" ? (
                    <Calendar
                        name={field.name}
                        value={inputvalue?.[field.name]}
                        onChange={onchangecb}
                        placeholder={field.placeholder}
                        showIcon
                        className="w-100   "
                    />
                ) : null}
                {/* {field.type === "number" ? (
                    <InputNumber
                        name={field.name}
                        value={inputvalue?.[field.name] ?? ''}
                        onChange={onchangecb}
                        placeholder={field.placeholder}
                        className="w-100   "
                    />
                ) : null} */}
            </LabelField>
        </div>
    );
};

export default Inputfield;
