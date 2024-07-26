export const formFields = [
    { name: 'uid', label: 'यूआईडी', type: 'text', placeholder: '', required: false },
    { name: 'firstName', label: 'प्रथम नाम', type: 'text', placeholder: 'English Characters Only', required: true },
    { name: 'middleName', label: 'मध्यम नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'lastName', label: 'अंतिम नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'alias', label: 'उपनाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'relationType', label: 'संबंध प्रकार', type: 'dropdown', placeholder: '-----------चयन-----------', required: false },
    { name: 'relationName', label: 'संबंधी का नाम', type: 'text', placeholder: 'English Characters Only', required: false },
    { name: 'maritalStatus', label: 'वैवाहिक स्थिति', type: 'dropdown', placeholder: '-----------चयन-----------', required: false },

];


export const formFields1 = [
    { name: 'gender', label: 'लिंग', type: 'dropdown', placeholder: '-----------चयन-----------', required: false },
    { name: 'headOfFamily', label: 'हेडऑफ परिवार', type: 'text', placeholder: '', required: false },
    { name: 'mobileNumber', label: 'मोबाइल नंबर', type: 'text', placeholder: '+91', required: false },
    { name: 'email', label: 'ईमेल आईडी', type: 'text', placeholder: '', required: false },
    { name: 'nationality', label: 'राष्ट्रीयता', type: 'dropdown', placeholder: '-----------चयन-----------', required: true },
    { name: 'occupation', label: 'व्यवसाय', type: 'dropdown', placeholder: '-----------चयन-----------', required: false },


];

export const formFields2 = [
    { name: 'dateOfBirth', label: 'जन्म तिथि', type: 'date', placeholder: 'DD/MM/YYYY', required: false },
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
