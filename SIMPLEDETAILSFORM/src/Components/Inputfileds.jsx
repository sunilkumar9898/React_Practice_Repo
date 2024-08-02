import React from "react";
import LabelGroup from "./LabelGroup";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
const Inputfileds = ({ field, inputvalue, onchangecb, options = [] }) => {
    let { name } = field;
    return (
        <div>
            <div className="p-2">
                <LabelGroup
                    name={field.name}
                    title={field.title}
                    required={field.required}>
                    {["text", "email", "password"].includes(field.type) ? (
                        <InputText
                            name={field.name}
                            placeholder={field.placeholder}
                            value={inputvalue?.[name] ?? ""}
                            onChange={onchangecb}
                            className="w-100"
                        />
                    ) : null}
                    {field.type === "dropdown" ? (
                        <Dropdown
                            name={field.name}
                            placeholder={field.placeholder}
                            value={inputvalue?.[field.name] || ""}
                            onChange={onchangecb}
                            options={options}
                            optionLabel={field.optionlabel}
                            className="w-100"
                        />
                    ) : null}
                    {field.type === "checkbox" ? (
                        <div className="d-flex">
                            {field.Course.map((ele) => (
                                <div className="d-flex px-1">
                                    <Checkbox
                                        inputId={ele.key}
                                        name={field.name}
                                        value={ele.value}
                                        onChange={onchangecb}
                                        checked={(
                                            inputvalue?.[field.name] || []
                                        ).some((item) => item === ele.value)}
                                        className="w-100"
                                    />
                                    <label
                                        htmlFor={ele.key}
                                        className="ml-2 d-flex">
                                        {ele.key}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </LabelGroup>
            </div>
        </div>
    );
};

export default Inputfileds;
