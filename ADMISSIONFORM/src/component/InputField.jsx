import React, { useState } from "react";
import Formlabel from "./Formlabel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";

const InputField = ({
    onchangecb,
    formValue,
    field,
    options = [],

}) => {
    return (
        <div>
            <Formlabel
                title={field.title}
                name={field.name}
                required={field.required}>
                {["text", "email", "password"]?.includes(field.type) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={onchangecb}
                        value={formValue?.[field.name]}
                        className="w-75 my-2"
                    />
                ) : null}

                {field.type === "date" ? (
                    <Calendar
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formValue?.[field.name]}
                        onChange={onchangecb}
                        className="w-75 my-2"
                    />
                ) : null}

                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        options={options}
                        onChange={onchangecb}
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                        value={formValue?.[field.name]}
                        className="w-75"
                    />
                ) : null}

                {field.type === "radio" ? (
                    <div>
                        {field.Gender.map((ele) => (
                            <div>
                                <RadioButton
                                    name={field.name}
                                    value={ele.value}
                                    onChange={onchangecb}
                                    checked={
                                        formValue?.[field.name] === ele.value
                                    }
                                />
                                <label  className="ml-2">
                                    {ele.name}
                                </label>
                            </div>
                        ))}
                    </div>
                ) : null}

                {field.type === "checkbox" ? (
                    <div>
                        {field.Course.map((ele) => {
                            return (
                                <div>
                                    <Checkbox
                                        inputId={ele.key}
                                        name={field.name}
                                        value={ele.value}
                                        onChange={onchangecb}
                                        checked={formValue?.[field.name]?.some((item) => item === ele.value
                                        )}
                                    />
                                    <label
                                        htmlFor={ele.key}
                                        className="ml-2">
                                        {ele.value}
                                    </label>
                                </div>
                            );
                        })}
                </div>
                ):null}
            </Formlabel>
        </div>
    );
};

export default InputField;
