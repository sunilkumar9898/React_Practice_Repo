import React from "react";
import LabelGroup from "./LabelGroup";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

const InputFields = ({
    field,
    onchangecb,
    inputvalue,
    options = [],
    required,
}) => {

    return (
        <div>
            <div className="d-flex w-100  justify-content-between">
                <LabelGroup
                    name={field.name}
                    title={field.title}
                    required={field.required}>
                    {["text", "password", "email"]?.includes(field.type) ? (
                        <InputText
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={onchangecb}
                            value={inputvalue?.[field.name]}
                            className="w-100 px-2 p-1"
                            style={{ height: "40px" }}
                        />
                    ) : null}
                    {field.type === "date" ? (
                        <Calendar
                            name={field.name}
                            placeholder={field.placeholder}
                            value={inputvalue?.[field.name]}
                            onChange={onchangecb}
                            className="w-100 px-2 p-1"
                            style={{ height: "42px" }}
                        />
                    ) : null}

                    {field.type === "dropdown" ? (
                        <Dropdown
                            name={field.name}
                            onChange={onchangecb}
                            optionLabel={field.optionLabel}
                            optionValue={field.optionValue}
                            options={options}
                            value={inputvalue?.[field.name] ?? ""}
                            placeholder={field.placeholder}
                            className="w-100 px-2 p-1"
                            style={{ height: "40px" }}
                        />
                    ) : null}
                </LabelGroup>
            </div>
        </div>
    );
};

export default InputFields;
