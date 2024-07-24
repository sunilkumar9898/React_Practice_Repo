export const inputFields = [
    { name: "HCR", type: "text", placeholder: "एचसीआर", title: "एचसीआर" },
    { name: "UID", type: "text", placeholder: "यूआईडी", title: "यूआईडी" , required: true },
    { name: "FirstName", type: "text", placeholder: "प्रथम नाम", title: "प्रथम नाम", required:true },
    { name: "MiddleName", type: "text", placeholder: "मध्य नाम", title: "मध्य नाम" },
    { name: "LastName", type: "text", placeholder: "अंतिम नाम", title: "अंतिम नाम" },
    { name: "Nationality", type: "text", placeholder: "राष्ट्रीयता", title: "राष्ट्रीयता" },
    { name: "TelephoneNumber", type: "text", placeholder: "टेलीफोन नंबर", title: "टेलीफोन नंबर" },
    { name: "Nickname", type: "text", placeholder: "उपनाम", title: "उपनाम" },
    { name: "Religion", type: "dropdown", placeholder: "धर्म", title: "धर्म", optionLabel: "name", optionValue: 'name' },
    { name: "CasteTribe", type: "dropdown", placeholder: "जाति / जनजाति", title: "जाति / जनजाति", optionLabel: "name", optionValue: 'name' },
    { name: "Category", type: "dropdown", placeholder: "श्रेणी", title: "श्रेणी", optionLabel: "name", optionValue: 'name' },
    { name: "MobileNumber", type: "text", placeholder: "मोबाइल नंबर", title: "मोबाइल नंबर", required: true },
    { name: "Email", type: "text", placeholder: "Email आईडी", title: "Email आईडी" },
];


export const addressFields = [
    { name: "HouseNumber", type: "text", placeholder: "मकान सं", title: "मकान सं" },
    { name: "StreetName", type: "text", placeholder: "सड़क का नाम", title: "सड़क का नाम" },
    { name: "Locality", type: "text", placeholder: "कालोनी / इलाका / क्षेत्र", title: "कालोनी / इलाका" },
    { name: "VillageTownCity", type: "text", placeholder: "ग्राम / नगर / शहर", title: "ग्राम / नगर " },
    { name: "TehsilBlock", type: "text", placeholder: "तहसील / ब्लॉक / मंडल", title: "तहसील / ब्लॉक" },
    { name: "ForCurrentAddress", type: "radio", placeholder: "वर्तमान के लिए नहीं", title: "वर्तमान के लिए नहीं", Address: [{ name: "हाँ", value: "हाँ" }, { name: "नहीं", value: "नहीं" }], required: true },
    { name: "Country", type: "dropdown", placeholder: "देश", title: "देश", optionLabel: "name", optionValue: 'name', required: true },
    { name: "State", type: "dropdown", placeholder: "राज्य", title: "राज्य", optionLabel: "name", optionValue: 'name', required: true },
    { name: "District", type: "dropdown", placeholder: "जिला", title: "जिला", optionLabel: "name", optionValue: 'name', required: true },
    { name: "PoliceStation", type: "dropdown", placeholder: "पुलिस स्टेशन", title: "पुलिस स्टेशन", options: ["MAVLI JUNCTION"], required: true },
    { name: "PinCode", type: "text", placeholder: "पिन कोड", title: "पिन कोड", required: true }
];



export const Religions = [
    { name: "Hinduism", label: "हिन्दू धर्म" },
    { name: "Islam", label: "इस्लाम" },
    { name: "Christianity", label: "ईसाई धर्म" },
    { name: "Sikhism", label: "सिख धर्म" },
    { name: "Buddhism", label: "बौद्ध धर्म" }
];

export const Categorie = [
    { name: "General", label: "सामान्य" },
    { name: "OBC", label: "अन्य पिछड़ा वर्ग" },
    { name: "SC", label: "अनुसूचित जाति" },
    { name: "ST", label: "अनुसूचित जनजाति" },
    { name: "EWS", label: "आर्थिक रूप से कमजोर वर्ग" }
];


export const CasteTrib = [
    { name: "Brahmin", label: "ब्राह्मण" },
    { name: "Kshatriya", label: "क्षत्रिय" },
    { name: "Vaishya", label: "वैश्य" },
    { name: "Shudra", label: "शूद्र" },
    { name: "ScheduledCaste", label: "अनुसूचित जाति" },
    { name: "ScheduledTribe", label: "अनुसूचित जनजाति" },
    { name: "OtherBackwardClass", label: "अन्य पिछड़ा वर्ग" },
    { name: "NomadicTribe", label: "घुमंतू जनजाति" },
    { name: "DenotifiedTribe", label: "अघोषित जनजाति" },
    { name: "Other", label: "अन्य" }
];

export const States = [
    { name: "Rajasthan", label: "राजस्थान" },
    { name: "Uttar Pradesh", label: "उत्तर प्रदेश" },
    { name: "Maharashtra", label: "महाराष्ट्र" },
    { name: "Gujarat", label: "गुजरात" },
    { name: "Punjab", label: "पंजाब" }
];

export const Countries = [
    { name: "India", label: "भारत" },
    { name: "USA", label: "संयुक्त राज्य अमेरिका" },
    { name: "Canada", label: "कनाडा" },
    { name: "UK", label: "यूनाइटेड किंगडम" },
    { name: "Australia", label: "ऑस्ट्रेलिया" }
];

export const Districts = [
    { name: "Jaipur", label: "जयपुर" },
    { name: "Udaipur", label: "उदयपुर" },
    { name: "Ajmer", label: "अजमेर" },
    { name: "Jodhpur", label: "जोधपुर" },
    { name: "Kota", label: "कोटा" }
];


export const PoliceStations = [
    { name: "MavliJunction", label: "मावली जंक्शन" },
    { name: "JaipurCity", label: "जयपुर शहर" },
    { name: "UdaipurCity", label: "उदयपुर शहर" },
    { name: "AjmerCity", label: "अजमेर शहर" },
    { name: "JodhpurCity", label: "जोधपुर शहर" },
    { name: "KotaCity", label: "कोटा शहर" },
    { name: "AlwarCity", label: "अलवर शहर" },
    { name: "BikanerCity", label: "बीकानेर शहर" },
    { name: "BharatpurCity", label: "भरतपुर शहर" },
    { name: "PaliCity", label: "पाली शहर" }
];

