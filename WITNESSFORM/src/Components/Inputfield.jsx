import React from "react";
import LabelField from "./LabelField";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Inputfield = ({
    field,
    onchangecb,
    inputvalue,
    options = [],
    required,
}) => {
    return (
        <div className="">
            <LabelField
                name={field.name}
                title={field.label}
                required={required}>
                {["text", "password", "email"]?.includes(field.type) ? (
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
                        options={options}
                        optionLabel={field.name}
                        optionValue={field.value}
                        placeholder={field.placeholder}
                        className="w-100"
                    />
                ) : null}
            </LabelField>
        </div>
    );
};

export default Inputfield;
