import { InputText } from "primereact/inputtext";
import React from "react";
import LableGroup from "./LableGroup";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";

const InputField = ({
    field,
    onchangeCb,
    inputValue,
    options = [],
    required,
}) => {
    return (
        <div className="">
            <LableGroup name={field.name} title={field.title} required={field.required}>
                {["text", "email", "password", "number"]?.includes(
                    field.type
                ) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        title={field.title}
                        onChange={onchangeCb}
                        value={inputValue?.[field.name]}
                        placeholder={field.placeholder}
                        className="w-100"
                        style={{ height: "35px" }}
                    />
                ) : null}

                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        type={field.type}
                        title={field.type}
                        onChange={onchangeCb}
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                        options={options}
                        value={inputValue?.[field.name] ?? ""}
                        placeholder={field.placeholder}
                        style={{ height: "35px" }}
                        className="w-100"
                    />
                ) : null}

                {field.type === "radio" ? (
                    <div className="d-flex w-100">
                        {field.Address.map((ele) => {
                            return (
                                <div className="d-inline-flex px-2">
                                    <RadioButton
                                        inputId={ele.key}
                                        name={field.name}
                                        value={ele.value}
                                        onChange={onchangeCb}
                                        checked={
                                            inputValue?.[field.name] ===
                                            ele.value
                                        }
                                        style={{ height: "35px" }}
                                    />
                                    <label
                                        htmlFor={ele.key}
                                        className="ml-5 mx-2 ">
                                        {ele.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </LableGroup>
        </div>
    );
};

export default InputField;
