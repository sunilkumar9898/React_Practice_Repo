import React from "react";
import Labelgroup from "./Labelgroup";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
const Inputgroup = ({ field, onchangecb, inputvalue, options = [] }) => {
    return (
        <div>
            <div>
                <Labelgroup
                    name={field.name}
                    title={field.title}
                    required={field.required}>
                    {["text", "email", "password"].includes(field.type) ? (
                        <InputText
                            name={field.name}
                            value={inputvalue?.[field.name]}
                            onChange={onchangecb}
                            placeholder={field.placeholder}
                            className="w-100"
                        />
                    ) : null}
                    {field.type === "dropdown" ? (
                        <Dropdown
                            name={field.name}
                            value={inputvalue?.[field.name]}
                            onChange={onchangecb}
                            placeholder={field.placeholder}
                            options={options}
                            optionLabel="name"
                            className="w-100"
                        />
                    ) : null}

                    {field.type === "date" ? (
                        <Calendar
                            name={field.name}
                            value={inputvalue?.[field.name]}
                            onChange={onchangecb}
                            placeholder={field.placeholder}
                            showIcon
                            className="w-100"
                        />
                    ) : null}

                    {field.type === "number" ? (
                        <InputNumber
                            name={field.name}
                            value={inputvalue?.[field.name] || 0}
                            onValueChange={onchangecb}
                            placeholder={field.placeholder}
                            className="w-100"
                        />
                    ) : null}
                    {field.type === "radio" ? (
                        <div className="d-flex px-2">
                            {field.Radio.map((ele) => (
                                <div className="d-inline-flex px-2">
                                    <RadioButton
                                        inputId={ele.key}
                                        name={field.name}
                                        value={ele.value}
                                        onChange={onchangecb}
                                        checked={
                                            inputvalue?.[field.name] === ele.key
                                        }
                                    />
                                    <label htmlFor={ele.key} className="ml-2">
                                        {ele.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </Labelgroup>
            </div>
        </div>
    );
};

export default Inputgroup;
