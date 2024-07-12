import React, { useState } from "react";
import Formlabel from "./Formlabel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";

const InputField = ({ onchangecb, formValue, field, options = [] }) => {
        // const [selectedCheck, setSelectedCheck] = useState([]);
        // console.log(selectedCheck);
        // const handleChange = (val) => {
        //     let validCheck = selectedCheck.some((ele) => ele === val);
        //     if (validCheck) {
        //         let newValue = selectedCheck.filter((ele) => ele !== val);
        //         setSelectedCheck(newValue);
        //     } else {
        //         setSelectedCheck((prev) => [...prev, val]);
        //         // setSelectedCheck.push(val)
        //         // selectedCheck.push(val)
        //     }
        //     console.log(validCheck);

        //     // setSelectedCheck((prevSelected) => {
        //     //     if (prevSelected.includes(val)) {
        //     //         return prevSelected.filter((ele) => ele !== val);
        //     //     } else {
        //     //         return [...prevSelected, val];
        //     //     }
        //     // });
        // };
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

                {/* {field.type === "checkbox" ? (
                    <div>
                        {field.categories.map((ele) => (
                            <div>
                                <input
                                    field={field.name}
                                    type="checkbox"
                                    onChange={() => handleChange(ele.name)}
                                    checked={selectedCheck.includes(ele.name)}
                                />
                                <p>{ele.name}</p>
                                <p>{ele.ca }</p>
                            </div>
                        ))}
                    </div>
                ) : null} */}
            </Formlabel>
        </div>
    );
};

export default InputField;
