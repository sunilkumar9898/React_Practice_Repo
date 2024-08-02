export const formFields = [
    {
        name: "name",
        placeholder: "Enter your name",
        title: "Name",
        type: "text",
        required: true
    },
    {
        name: "fathersName",
        placeholder: "Enter your father's name",
        title: "Father's Name",
        type: "text",
        required: true
    },
    {
        name: "email",
        placeholder: "Enter your email",
        title: "Email",
        type: "email",
        required: true
    },
    {
        name: "gender",
        placeholder: "Select your gender",
        title: "Gender",
        type: "dropdown",
        optionlabel: 'name',
        required: true
    },
    {
        name: "phoneNumber",
        placeholder: "Enter your phone number",
        title: "Phone Number",
        type: "text",
        required: true
    },
    {
        name: "password",
        placeholder: "Enter your password",
        title: "Password",
        type: "password",
        required: true
    },
    {
        name: "qualification",
        placeholder: "Enter your qualification",
        title: "Qualification",
        type: "checkbox",
        Course: [
            { value: "HTML", key: "HTML" },
            { value: "JAVA", key: "JAVA" },
            { value: "REACT", key: "REACT" }
        ],
        required: true
    },
    {
        name: "state",
        placeholder: "Enter your state",
        title: "State",
        type: "dropdown",
        optionlabel:'name',
        required: true
    },
    {
        name: "message",
        placeholder: "Enter your message",
        title: "Message",
        type: "text",
        required: false
    }
];


//  export const initialValue = {
//     name: "",
//     fathersName: "",
//     email: "",
//     gender: "",
//      phoneNumber: "",
//     password: "",
//     state: "",
//     message: ""
// };


export const states = [
    { name: "andhraPradesh", label: "Andhra Pradesh" },
    { name: "arunachalPradesh", label: "Arunachal Pradesh" },
    { name: "assam", label: "Assam" },
    { name: "bihar", label: "Bihar" },
    { name: "chhattisgarh", label: "Chhattisgarh" },
    { name: "goa", label: "Goa" },
    { name: "gujarat", label: "Gujarat" },
    { name: "haryana", label: "Haryana" },
    { name: "himachalPradesh", label: "Himachal Pradesh" },
    { name: "jharkhand", label: "Jharkhand" },
    { name: "karnataka", label: "Karnataka" },
    { name: "kerala", label: "Kerala" },
    { name: "madhyaPradesh", label: "Madhya Pradesh" },
    { name: "maharashtra", label: "Maharashtra" },
    { name: "manipur", label: "Manipur" },
    { name: "meghalaya", label: "Meghalaya" },
    { name: "mizoram", label: "Mizoram" },
    { name: "nagaland", label: "Nagaland" },
    { name: "odisha", label: "Odisha" },
    { name: "punjab", label: "Punjab" },
    { name: "rajasthan", label: "Rajasthan" },
    { name: "sikkim", label: "Sikkim" },
    { name: "tamilNadu", label: "Tamil Nadu" },
    { name: "telangana", label: "Telangana" },
    { name: "tripura", label: "Tripura" },
    { name: "uttarPradesh", label: "Uttar Pradesh" },
    { name: "uttarakhand", label: "Uttarakhand" },
    { name: "westBengal", label: "West Bengal" },
    { name: "andamanNicobar", label: "Andaman and Nicobar Islands" },
    { name: "chandigarh", label: "Chandigarh" },
    { name: "dadarNagarHaveliDamanDiu", label: "Dadra and Nagar Haveli and Daman and Diu" },
    { name: "delhi", label: "Delhi" },
    { name: "lakshadweep", label: "Lakshadweep" },
    { name: "puducherry", label: "Puducherry" }
];


export const genderOptions = [
    { name: "male", label: "Male" },
    { name: "female", label: "Female" },
    { name: "other", label: "Other" },
    { name: "preferNotToSay", label: "Prefer not to say" }
];
