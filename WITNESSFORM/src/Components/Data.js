export const formFields = [
    { name: 'uid', label: 'यूआईडी', type: 'text', placeholder: '', required: false },
    { name: 'firstName', label: 'प्रथम नाम', type: 'text', placeholder: 'English Characters Only', required: true },
    { name: 'middleName', label: 'मध्यम नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'lastName', label: 'अंतिम नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'alias', label: 'उपनाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'relationType', label: 'संबंध प्रकार', type: 'dropdown', optionValue: 'name', optionLabel:"name", placeholder: '-----------चयन-----------', required: false },
    { name: 'relationName', label: 'संबंधी का नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'maritalStatus', label: 'वैवाहिक स्थिति', type: 'dropdown', optionValue: 'name', optionLabel: "name", placeholder: '-----------चयन-----------', required: false },

];


export const formFields1 = [
    { name: 'gender', label: 'लिंग', type: 'dropdown', optionValue: 'name', optionLabel: "name", placeholder: '-----------चयन-----------', required: false },
    { name: 'headOfFamily', label: 'लैंडलाइन नंबर', type: 'text', placeholder: '', required: false },
    { name: 'mobileNumber', label: 'मोबाइल नंबर', type: 'text', placeholder: '+91', required: false },
    { name: 'email', label: 'ईमेल आईडी', type: 'text', placeholder: '', required: false },
    { name: 'nationality', label: 'राष्ट्रीयता', type: 'dropdown', placeholder: '-----------चयन-----------', optionValue: 'name', optionLabel: "name", required: true },
    { name: 'occupation', label: 'व्यवसाय', type: 'dropdown', placeholder: '-----------चयन-----------', optionValue: 'name', optionLabel: "name", required: false },
    {
        name: "citizenship",
        label: 'भारतीय नागरिकता',
        title: "भारतीय नागरिकता",
        type: "radio",
        Gender: [
            { key: "yes", name: "हां", value: "हां" },
            { key: "no", name: "नहीं", value: "नहीं" }
        ],
        required: true
    },


];

export const formFields2 = [
    { name: 'dateOfBirth', label: 'जन्म तिथि', type: 'date', placeholder: 'DD/MM/YYYY', required: true },
    { name: 'ageInYearsMonths', label: 'आयु (वर्ष/महीना)', type: 'text', placeholder: '', required: false },
    { name: 'yearOfBirth', label: 'जन्म का वर्ष', type: 'text', placeholder: '', required: false },
    { name: 'ageRange', label: 'आयु सीमा (से - तक)', type: 'text', placeholder: '', required: false }


];

export const Intialvalue = {
    uid: "",
    firstName: "",
    middleName: "",
    lastName: "",
    alias: "",
    relationType: "",
    relationName: "",
    maritalStatus: "",
    gender: "",
    headOfFamily: "",
    mobileNumber: "",
    email: "",
    nationality: "",
    occupation: "",
    dateOfBirth: "",
    ageInYearsMonths: "",
    yearOfBirth: "",
    ageRange: ""

}

export const relationshipTypes = [
    { name: 'parent', label: 'माता-पिता' },
    { name: 'sibling', label: 'भाई-बहन' },
    { name: 'spouse', label: 'पति/पत्नी' },
    { name: 'friend', label: 'मित्र' },
    { name: 'child', label: 'बच्चा' }
];




export const maritalStatus = [
    { "name": "single", "label": "Single" },
    { "name": "married", "label": "Married" },
    { "name": "divorced", "label": "Divorced" },
    { "name": "widowed", "label": "Widowed" },
    { "name": "separated", "label": "Separated" },
    { "name": "in_relationship", "label": "In a Relationship" },
    { "name": "engaged", "label": "Engaged" }
]


export const gender = [
    { "name": "male", "label": "Male" },
    { "name": "female", "label": "Female" },

]


export const citizenship = [
    { "name": "indian", "label": "Indian" },
    { "name": "american", "label": "American" },
    { "name": "canadian", "label": "Canadian" },
    { "name": "british", "label": "British" },
    { "name": "australian", "label": "Australian" },
    { "name": "german", "label": "German" },
    { "name": "french", "label": "French" },
    { "name": "chinese", "label": "Chinese" },
    { "name": "japanese", "label": "Japanese" },
    { "name": "russian", "label": "Russian" },
    { "name": "brazilian", "label": "Brazilian" },
    { "name": "mexican", "label": "Mexican" },
    { "name": "south_african", "label": "South African" },
    { "name": "italian", "label": "Italian" },
    { "name": "spanish", "label": "Spanish" }
]


export const occupation = [
    { "name": "engineer", "label": "Engineer" },
    { "name": "doctor", "label": "Doctor" },
    { "name": "teacher", "label": "Teacher" },
    { "name": "nurse", "label": "Nurse" },
    { "name": "software_developer", "label": "Software Developer" },
    { "name": "designer", "label": "Designer" },
    { "name": "accountant", "label": "Accountant" },
    { "name": "lawyer", "label": "Lawyer" },
    { "name": "scientist", "label": "Scientist" },
    { "name": "architect", "label": "Architect" },
    { "name": "journalist", "label": "Journalist" },
    { "name": "chef", "label": "Chef" },
    { "name": "musician", "label": "Musician" },
    { "name": "artist", "label": "Artist" },
    { "name": "plumber", "label": "Plumber" },
    { "name": "electrician", "label": "Electrician" },
    { "name": "salesperson", "label": "Salesperson" },
    { "name": "entrepreneur", "label": "Entrepreneur" }
]
