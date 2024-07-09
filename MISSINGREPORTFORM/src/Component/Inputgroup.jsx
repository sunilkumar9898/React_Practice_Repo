import React from "react";
import Labelgroup from "./Labelgroup";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

const Inputgroup = ({ field, onchangecb, formvalue, options = [] }) => {
    return (
        <div>
            <Labelgroup  name={field.name} title={field.title}>
                {["text", "email", "password"]?.includes(field.type) ? (
                    <InputText
                        name={field.name}
                        type={field.type}
                        onChange={onchangecb}
                        placeholder={field.placeholder}
                        value={formvalue?.[field.name] ?? ""}
                        className="w-100 my-2"
                    />
                ) : null}

                {field.type === "date" ? (
                    <Calendar
                        type={field.type}
                        name={field.name}
                        onChange={onchangecb}
                        placeholder={field.placeholder}
                        value={formvalue?.[field.name] ?? ""}
                        className="w-100 my-2"
                    />
                ) : null}

                {field.type === "dropdown" ? (
                    <Dropdown
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={onchangecb}
                        type={field.type}
                        value={formvalue?.[field.name]}
                        className="w-100 my-2"
                        optionLabel={field.optionLabel}
                        optionValue={field.optionValue}
                        options={options}
                    />
                ) : null}
            </Labelgroup>
        </div>
    );
};

export default Inputgroup;
