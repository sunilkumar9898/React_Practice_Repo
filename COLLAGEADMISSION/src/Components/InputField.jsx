import React from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";

const InputField = ({ field, onchangecb, formVlaue, options = [] }) => {
    return (
        <div className=" p-2  " >
            <Label  name={field.name} title={field.title} required={field.required}>
                {["text", "email", "password", "email"]?.includes(
                    field.type
                ) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formVlaue?.[field.name] ?? ""}
                        className="w-100"
                        onChange={onchangecb}
                    />
                ) : null}
                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formVlaue?.[field.name] ?? ""}
                        className="w-100"
                        onChange={onchangecb}
                        options={options}
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                    />
                ) : null}
                {field.type === "radio" ? (
                    <div className="d-flex">
                        {field.Gender.map((ele) => (
                            <div className="d-inline-flex">
                                <RadioButton
                                    name={field.name}
                                    value={ele.value}
                                    onChange={onchangecb}
                                    className="w-100"
                                    checked={
                                        formVlaue?.[field.name] === ele.value
                                    }
                                />
                                <label className="ml-2 mx-2">{ele.name}</label>
                            </div>
                        ))}
                    </div>
                ) : null}

                {field.type === "checkbox" ? (
                    <div className="d-flex">
                        {field.Course.map((ele) => (
                            <div className="d-flex">
                                <Checkbox
                                    inputId={ele.key}
                                    name={field.name}
                                    className="w-100"
                                    value={ele.value }
                                    onChange={onchangecb}
                                    checked={formVlaue?.[field.name]?.some(
                                        (item) => item === ele.value
                                    )}
                                />
                                <label htmlFor={ele.key} className="ml-2 mx-2">
                                    {ele.value}
                                </label>
                            </div>
                        ))}
                    </div>
                ) : null}
            </Label>
        </div>
    );
};

export default InputField;
