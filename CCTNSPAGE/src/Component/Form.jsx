import React from 'react'
import Labelgroup from './Labelgroup';
import InputGroup from './InputGroup';
import { useState } from 'react';






const formFields = [
    {
        name: "uid",
        title: "यूआईडी सं.",
        type: "text",
        placeholder: "यूआईडी सं",
    },
    {
        name: "fname",
        title: "प्रथम नाम*",
        type: "text",
        placeholder: "प्रथम नाम",
    },
    {
        name: "mname",
        title: "मध्य नाम",
        type: "text",
        placeholder: "मध्य नाम",
    },
    {
        name: "lname",
        title: "अंतिम नाम",
        placeholder: "अंतिम नाम",
        type: "text",
    },
    {
        name: "cast",
        title: "श्रेणी",
        placeholder: "श्रेणी",
        optionLabel: "name",
        type: "dropdown",
    },
];

//**************************************************** */

const formFields2 = [
    {
        name: "sex",
        title: "लिंग",
        placeholder: "लिंग",
        type: "dropdown",
        optionLabel: "select",
    },
    {
        name: "relation",
        title: "संबंध प्रकार",
        type: "dropdown",
        placeholder: "संबंध प्रकार",
    },
    {
        name: "relatednaem",
        title: "	संबंधी का नाम",
        type: "text",
        placeholder: "	संबंधी का नाम",
    },
    {
        name: "email",
        title: "	ईमेल आईडी",
        type: "email",
        placeholder: "	ईमेल आईडी",
    },
];
//**************************************************** */

const intialvalue = {
    uid: "",
    fname: "",
    mname: "",
    lname: "",
    cast: "",
    email: "",
    relatednaem: "",
    relation: "",
    sex:""
};
//**************************************************** */

const Form = () => {
    const [data, setData] = useState(intialvalue);
    const [showdata, setShowdata] = useState([]);

    //**************************************************** */

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    //**************************************************** */

    const handlesubmit = (e) => {
        e.preventDefault();
        setShowdata((prev) => [...prev, data]);

        console.log(showdata, "123654");
        setData(intialvalue);
    };
    return (
        <>
            <div className="d-flex flex-column w-50 mx-auto text-left main_div justify-around mt-5 border p-3 rounded-4 ">
                <div className=" child_div d-flex flex-wrap p-2 w-100 justify-content-around">
                    <div>
                        {formFields.map((field) => (
                            <InputGroup
                                field={field}
                                onchangecb={handlechange}
                                formvalue={data}
                            />
                        ))}
                    </div>
                    <div>
                        {formFields2.map((field) => (
                            <InputGroup
                                field={field}
                                onchangecb={handlechange}
                                formvalue={data}
                            />
                        ))}
                    </div>
                </div>
                <button className="btn btn-success" onClick={handlesubmit}>
                    submit
                </button>
            </div>
            <div className="container d-flex p-2 mt-5 flex-wrap mx-auto justify-content-center ">
                {showdata.map((ele, idx) => {
                    return (
                        <div
                            key={idx}
                            className="text-left border p-4 mx-2  my-2 rounded-3 shadow-lg">
                            <p>{ele.fname}</p>
                            <p>{ele.cast}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Form
