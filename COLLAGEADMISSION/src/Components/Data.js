export const formFields = [
    {
        name: "name",
        title: "नाम",
        type: "text",
        placeholder: "नाम",
        required:true
    },
    {
        name: "father_name",
        title: "पिता का नाम",
        type: "text",
        placeholder: "पिता का नाम",
        required: true

    },
    {
        name: "mother_name",
        title: "माता का नाम",
        type: "text",
        placeholder: "माता का नाम",
        required: true

    },
    {
        name: "email_address",
        title: "ईमेल पता",
        type: "email",
        placeholder: "ईमेल पता",
        required: true

    }
    ,
    {
        name: "state",
        title: "राज्य",
        type: "dropdown",
        placeholder: "राज्य",
        optionLabel: "name",
        optionValue: "name",
        required: true

    },
    {
        name: "gender",
        type: "radio",
        title: "Gender",
        required: true,

        Gender: [
            { name: "male", value: "Male" },
            { name: "female", value: "FeMale" },
            { name: "other", value: "Other" },
        ],
    },

    {
        name: 'course',
        type: 'checkbox',
        title: 'Course',
        required: true,

        Course: [
            { value: "HTML", key: "HT" },
            { value: "JAVA", key: "JA" },
            { value: "REACT", key: "RE" }
        ]
    }
];




export const indiaStates = [
    {
        name: "Andhra Pradesh",
        code: "AP",
        capital: "Amaravati"
    },
    {
        name: "Arunachal Pradesh",
        code: "AR",
        capital: "Itanagar"
    },
    {
        name: "Assam",
        code: "AS",
        capital: "Dispur"
    },
    {
        name: "Bihar",
        code: "BR",
        capital: "Patna"
    },
    {
        name: "Chhattisgarh",
        code: "CG",
        capital: "Raipur"
    },
    {
        name: "Goa",
        code: "GA",
        capital: "Panaji"
    },
    {
        name: "Gujarat",
        code: "GJ",
        capital: "Gandhinagar"
    },
    {
        name: "Haryana",
        code: "HR",
        capital: "Chandigarh"
    },
    {
        name: "Himachal Pradesh",
        code: "HP",
        capital: "Shimla"
    },
    {
        name: "Jharkhand",
        code: "JH",
        capital: "Ranchi"
    },
    {
        name: "Karnataka",
        code: "KA",
        capital: "Bengaluru"
    },
    {
        name: "Kerala",
        code: "KL",
        capital: "Thiruvananthapuram"
    },
    {
        name: "Madhya Pradesh",
        code: "MP",
        capital: "Bhopal"
    },
    {
        name: "Maharashtra",
        code: "MH",
        capital: "Mumbai"
    },
    {
        name: "Manipur",
        code: "MN",
        capital: "Imphal"
    },
    {
        name: "Meghalaya",
        code: "ML",
        capital: "Shillong"
    },
    {
        name: "Mizoram",
        code: "MZ",
        capital: "Aizawl"
    },
    {
        name: "Nagaland",
        code: "NL",
        capital: "Kohima"
    },
    {
        name: "Odisha",
        code: "OD",
        capital: "Bhubaneswar"
    },
    {
        name: "Punjab",
        code: "PB",
        capital: "Chandigarh"
    },
    {
        name: "Rajasthan",
        code: "RJ",
        capital: "Jaipur"
    },
    {
        name: "Sikkim",
        code: "SK",
        capital: "Gangtok"
    },
    {
        name: "Tamil Nadu",
        code: "TN",
        capital: "Chennai"
    },
    {
        name: "Telangana",
        code: "TS",
        capital: "Hyderabad"
    },
    {
        name: "Tripura",
        code: "TR",
        capital: "Agartala"
    }]
