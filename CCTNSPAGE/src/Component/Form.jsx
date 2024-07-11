import React from 'react'
import Labelgroup from './Labelgroup';
import InputGroup from './InputGroup';
import { useState } from 'react';

const cities = [
    { name: "अनुसूचित जनजाति", code: "NY" },
    { name: "अनुसूचित जाति", code: "RM" },
    { name: "अन्य पिछड़ा वर्ग (ओबीसी)", code: "LDN" },
    { name: "सामान्य", code: "IST" },
];

const relations = [
    { name: "Father", code: "F" },
    { name: "Mother", code: "M" },
    { name: "Brother", code: "B" },
    { name: "Sister", code: "S" },
];

const genders = [
    { name: "Male", code: "M" },
    { name: "Female", code: "F" },
    { name: "Other", code: "O" },
];

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
        name: "gender",
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

    // {
    //     name: "textarea",
    //     title: "गुम व्यक्ति विवरण",
    //     type: "textarea",
    //     placeholder: "	ईमेल आईडी",
    // },
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
    gender: "",
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


    const getOptions = (field) => {
        if (field.name === "gender") {
            return genders;
        } else if (field.name === "relation") {
            return relations;
        } else if (field.name === "cast") {
            return cities;
        }
    };
    return (
        <>
            <div>
                <h1 className="text-center mt-5 text-primary">
                    {" "}
                    गुमशुदा व्यक्ति पंजीकरण
                </h1>
            </div>
            <div className="d-flex flex-column w-50 mx-auto text-left main_div justify-around mt-1 border p-3 rounded-4 ">
                <div className=" child_div d-flex flex-wrap p-2 w-100 justify-content-around">
                    <div>
                        {formFields.map((field) => (
                            <InputGroup
                                field={field}
                                onchangecb={handlechange}
                                formvalue={data}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                    <div>
                        {formFields2.map((field) => (
                            <InputGroup
                                field={field}
                                onchangecb={handlechange}
                                formvalue={data}
                                options={getOptions(field)}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="btn btn-success w-50 text-center mx-auto mt-4"
                    onClick={handlesubmit}>
                    submit
                </button>
            </div>




            
            <div className="container d-flex p-2 mt-5 flex-wrap mx-auto justify-content-center ">
                {showdata.map((ele, idx) => {
                    return (
                        <div
                            key={idx}
                            className="text-left border w-25 mx-5  p-4 mx-2  my-2 rounded-3 shadow-lg">
                            <div className="d-flex justify-content-between py-1">
                                <div> यूआईडी सं.</div> <div> {ele.uid}</div>
                            </div>
                            <div className="d-flex justify-content-between  py-1">
                                <div>प्रथम नाम </div> <div>{ele.fname}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>मध्य नाम </div> <div>{ele.mname}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>अंतिम नाम</div> <div> {ele.lname}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>श्रेणी </div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div> {ele.cast?.name ?? " "}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>लिंग </div>{" "}
                                <div>{ele.gender?.name ?? " "}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>संबंध प्रकार </div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>{ele.relation?.name ?? ""}</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>संबंधी का नाम </div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div> {ele.relatednaem}</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>ईमेल आईडी </div> <div>{ele.email}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Form
