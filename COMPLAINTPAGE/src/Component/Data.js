
export const formfields = [
    {
        name: "firstname",
        title: "प्रथम नाम",
        placeholder: " प्रथम नाम",
        type: "text",
        required: true,
    },
    {
        name: "middlename",
        title: " मध्य नाम",
        placeholder: "  मध्य नाम",
        type: "text",
        required: false,
    },
    {
        name: "lastname",
        title: " अंतिम नाम",
        placeholder: " अंतिम नाम",
        type: "text",
        required: false,
    },
    {
        name: "email",
        title: "  इमेल",
        placeholder: "  इमेल",
        type: "email",
    },
    {
        name: "relationtype",
        title: "  संबंध का प्रकार",
        placeholder: "  संबंध का प्रकार",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
    },
    {
        name: "relativename",
        title: "   संबंधी का नाम",
        placeholder: "   संबंधी का नाम",
        type: "text",
    },
    {
        name: "complaintnature",
        title: "   शिकायत की प्रकृति",
        placeholder: " शिकायत की प्रकृति",
        type: "text",
    },
    {
        name: "complainttype",
        title: "     श्रेणी",
        placeholder: "  श्रेणी",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
        required: true,
    },
    {
        name: "mobilenumber",
        title: " मोबाइल नं ",
        placeholder: "  मोबाइल नं ",
        type: "number",
        required: true,
    },
    {
        name: "homenumber",
        title: " मकान संख्या  ",
        placeholder: " मकान संख्या  ",
        type: "number",
    },
    {
        name: "roadnumber",
        title: " सड़़क का नाम",
        placeholder: "सड़़क का नाम ",
        type: "text",
    },
    {
        name: "colony",
        title: "काॅलोनी / इलाका / क्षे़त्र  ",
        placeholder: "काॅलोनी इलाका क्षे़त्र  ",
        type: "text",
    },
    {
        name: "village",
        title: "ग्राम / नगर / शहर ",
        placeholder: "ग्राम नगर शहर",
        type: "text",
    },
    {
        name: "country",
        title: " देश",
        placeholder: " देश",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
        required: true,
    },
    {
        name: "state",
        title: " राज्य ",
        placeholder: " राज्य ",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
        required: true,
    },
    {
        name: "district",
        title: "जिला",
        placeholder: "जिला",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
        required: true,
    },

    {
        name: "policestation",
        title: "पुलिश स्टेशन",
        placeholder: "पुलिश स्टेशन",
        type: "dropdown",
        optionLabel: "name",
        optionValue: "name",
    },
    {
        name: "pincode",
        title: "  पिन कोड",
        placeholder: "  पिन कोड",
        type: "text",
    },
    {
        name: "block",
        title: " तहसील  / बलाक /  मंडल ",
        placeholder: " तहसील बलाक मंडल ",
        type: "text",
    },
    {
        name: "complaintdate",
        title: " शिकायत तिथि ",
        placeholder: "शिकायत तिथि",
        type: "date",
    },
    {
        name: "complaintstory",
        title: " शिकायत का विवरण",
        placeholder: " शिकायत का विवरण ",
        type: "textarea",
        required: true,
    },
];

export const intialvalue = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    relationtype: "",
    relativename: "",
    complaintnature: "",
    complainttype: "",
    mobilenumber: "",
    homenumber: "",
    roadnumber: "",
    colony: "",
    state: "",
    country: "",
    district: "",
    policestation: "",
    pincode: "",
    block: "",
    complaintdate: "",
    complaintstory: "",
};

export const countries = [
    { name: "India" },
    { name: "United States" },
    { name: "Canada" },
    { name: "Australia" },
    { name: "Germany" },
    { name: "France" },
    { name: "Japan" },
    { name: "China" },
    { name: "Brazil" },
    { name: "South Africa" },
];

export const indiaStates = [
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "Chhattisgarh" },
    { name: "Goa" },
    { name: "Gujarat" },
    { name: "Haryana" },
    { name: "Himachal Pradesh" },
    { name: "Jharkhand" },
    { name: "Karnataka" },
    { name: "Kerala" },
    { name: "Madhya Pradesh" },
    { name: "Maharashtra" },
    { name: "Manipur" },
    { name: "Meghalaya" },
    { name: "Mizoram" },
    { name: "Nagaland" },
    { name: "Odisha" },
    { name: "Punjab" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Tamil Nadu" },
    { name: "Telangana" },
    { name: "Tripura" },
    { name: "Uttar Pradesh" },
    { name: "Uttarakhand" },
    { name: "West Bengal" },
];

export const relationTypes = [
    { name: "Parent" },
    { name: "Brother" },
    { name: "Spouse" },
    { name: "sister" },
];

export const cast = [
    { name: "अनुसूचित जनजाति" },
    { name: "अनुसूचित जाति" },
    { name: "अन्य पिछड़ा वर्ग (ओबीसी)" },
    { name: "सामान्य" },
];
export const rajasthanDistricts = [
    { name: "Jaipur" },
    { name: "Jodhpur" },
    { name: "Udaipur" },
    { name: "Kota" },
    { name: "Ajmer" },
    { name: "Bikaner" },
    { name: "Alwar" },
    { name: "Bhilwara" },
    { name: "Bharatpur" },
    { name: "Sikar" },
];
export const jaipurPoliceStations = [
    { name: "Adarsh Nagar" },
    { name: "Ashok Nagar" },
    { name: "Bani Park" },
    { name: "Bapu Nagar" },
    { name: "Brahmapuri" },
    { name: "C-Scheme" },
    { name: "Chandpol" },
    { name: "Gandhi Nagar" },
    { name: "M.I. Road" },
    { name: "Mansarovar" },
];