export const formFields = [
    { name: "MedicoLegalCaseType", placeholder: "Type of Medico-Legal Case", type: "dropdown", title: "चिकित्सकीय कानूनी प्रकरण के प्रकार", optionLabel: "name", optionValue: "name" , required:true },
    { name: "chick", placeholder: "Type of Medico-Legal Case", type: "dropdown", title: "गाल",  optionLabel: "name", optionValue: "name" },
    { name: "ReportDate", placeholder: "Date of Report", type: "date", title: "प्रतिवेदन की तिथि" },
    { name: "IncidentDate", placeholder: "जनरल डायरी की तिथि", type: "date", title: "जनरल डायरी की तिथि" },
    { name: "FirNumber", placeholder: "प्राथमिकी सं.", type: "text", title: "प्राथमिकी सं.", required: true },
    { name: "PatientName", placeholder: "Name of the Patient", type: "text", title: "क्या अस्पताल का नाम ट्राइब डेटा है?" },
    { name: "State", placeholder: "State", type: "dropdown", title: "राज्य", optionLabel: "name", optionValue: 'name', required: true },
    { name: "District", placeholder: "District", type: "dropdown", title: "जिला", optionLabel: "name", optionValue: "name", required: true },
    { name: "PoliceStation", placeholder: "Police Station", type: "dropdown", title: "पुलिस स्टेशन", optionLabel: "name", optionValue: "name", required: true },
    { name: "PinCode", placeholder: "PIN Code", type: "text", title: "पिन कोड" },
    { name: "HospitalName", placeholder: "Name of the Hospital", type: "text", title: "चिकित्सालय का नाम", required: true },
    { name: "TransferBy", placeholder: "Transferred By", type: "text", title: "के द्वारा अस्पताल में लाए गए व्यक्ति का चयन करें" },
    { name: "HospitalAddress", placeholder: "Hospital Address", type: "text", title: "चिकित्सालय का पता", required: true },
    { name: "InjuredPersonDetails", placeholder: "Details of the Injured Person", type: "text", title: "घटना का संक्षिप्त विवरण और अस्पताल में घायल को लाने वाले व्यक्ति का विवरण" },
    { name: "SpecialDoctor", placeholder: "Special Doctor", type: "dropdown", title: "विशेष डॉक्टर", optionLabel: "name", optionValue: "name" },
    { name: "IncidentSummary", placeholder: "Summary of Incident", type: "text", title: "घटना का संक्षिप्त विवरण" }
];

export const initialValues = {
    MedicoLegalCaseType: "",
    chick: "",
    ReportDate: "",
    IncidentDate: "",
    FirNumber: "",
    PatientName: "",
    State: "",
    District: "",
    PoliceStation: "",
    PinCode: "",
    HospitalName: "",
    TransferBy: "",
    HospitalAddress: "",
    InjuredPersonDetails: "",
    SpecialDoctor: "",
    IncidentSummary: ""
};



export const medicleoption = [
    { name: "अन्य", label: "अन्य", key: "33" },
    { name: "अन्य आपराधिक", label: "अन्य आपराधिक", key: "50" },
    { name: "अवैध शराब का उपभोग", label: "अवैध शराब का उपभोग", key: "26" },
    { name: "अश्त्र या शस्त्र से चोट", label: "अश्त्र या शस्त्र से चोट", key: "46" },
    { name: "आग्नेयशस्त्रों से फायरिंग में चोट आना", label: "आग्नेयशस्त्रों से फायरिंग में चोट आना", key: "34" },
    { name: "आत्महत्या का प्रयास", label: "आत्महत्या का प्रयास", key: "22" },
    { name: "उपद्रवी भीड़", label: "उपद्रवी भीड़", key: "49" },
    { name: "एसिड का उपभोग करने के लिए मजबूर", label: "एसिड का उपभोग करने के लिए मजबूर", key: "25" },
    { name: "एसिड फेंकने से", label: "एसिड फेंकने से", key: "9" },
    { name: "कुंद वस्तु से चोट", label: "कुंद वस्तु से चोट", key: "51" },
    { name: "कुत्ते के काटने से", label: "कुत्ते के काटने से", key: "18" },
    { name: "गंभीर चोट", label: "गंभीर चोट", key: "31" },
    { name: "गरम तरल पदार्थ", label: "गरम तरल पदार्थ", key: "44" },
    { name: "गला घोंटना", label: "गला घोंटना", key: "23" },
    { name: "गैस सिलेण्‍डर विस्‍फोट", label: "गैस सिलेण्‍डर विस्‍फोट", key: "14" },
    { name: "चरमपंथी आतंकवादी अभियान", label: "चरमपंथी आतंकवादी अभियान", key: "47" },
    { name: "चिकित्‍सक द्वारा लापरवाही से चोट", label: "चिकित्‍सक द्वारा लापरवाही से चोट", key: "17" },
    { name: "जबरदस्ती गर्भपात", label: "जबरदस्ती गर्भपात", key: "43" },
    { name: "जलने के कारण", label: "जलने के कारण", key: "1" },
    { name: "जहर का उपभोग करने के लिए मजबूर", label: "जहर का उपभोग करने के लिए मजबूर", key: "41" },
    { name: "ज्वलनशील पदार्थ के कारण", label: "ज्वलनशील पदार्थ के कारण", key: "39" },
    { name: "झगड़ा / लड़ाई", label: "झगड़ा / लड़ाई", key: "29" },
    { name: "डकैती आपरेशन या अन्य छापे", label: "डकैती आपरेशन या अन्य छापे", key: "48" },
    { name: "डूबने से", label: "डूबने से", key: "20" },
    { name: "दवाओं/स्वापक औषधि के उपभोग से", label: "दवाओं/स्वापक औषधि के उपभोग से", key: "45" },
    { name: "दुर्घटना", label: "दुर्घटना", key: "2" },
    { name: "नशे में ड्राइविंग", label: "नशे में ड्राइविंग", key: "27" },
    { name: "नींद की गोलिया खाने से", label: "नींद की गोलिया खाने से", key: "42" },
    { name: "नुकीली वस्तु से चोट", label: "नुकीली वस्तु से चोट", key: "30" },
    { name: "पशु द्वारा दंश", label: "पशु द्वारा दंश", key: "36" },
    { name: "पानी की विषाक्तता", label: "पानी की विषाक्तता", key: "40" },
    { name: "प्राकृतिक आपदा में घायल", label: "प्राकृतिक आपदा में घायल", key: "16" },
    { name: "बम विस्‍फोट", label: "बम विस्‍फोट", key: "13" },
    { name: "बलात्कार / बलात्‍कार की कोशिश", label: "बलात्कार / बलात्‍कार की कोशिश", key: "19" },
    { name: "बिजली के झटके", label: "बिजली के झटके", key: "15" },
    { name: "भवन या पेड़ से गिरने पर", label: "भवन या पेड़ से गिरने पर", key: "28" },
    { name: "भोजन की विषाक्तता", label: "भोजन की विषाक्तता", key: "24" },
    { name: "मकान ढहने से", label: "मकान ढहने से", key: "10" },
    { name: "मनुष्य द्वारा दंश", label: "मनुष्य द्वारा दंश", key: "37" },
    { name: "मानसिक रूप से विक्षप्त होना", label: "मानसिक रूप से विक्षप्त होना", key: "38" },
    { name: "रेल से टक्कर", label: "रेल से टक्कर", key: "3" },
    { name: "रेलगाड़ी दुर्घटना / पटरी से उतरने से", label: "रेलगाड़ी दुर्घटना / पटरी से उतरने से", key: "11" },
    { name: "वायुयान दुर्घटनाग्रस्‍त", label: "वायुयान दुर्घटनाग्रस्‍त", key: "12" },
    { name: "शरारत पूर्ण गर्भपात", label: "शरारत पूर्ण गर्भपात", key: "21" },
    { name: "सर्प दंश", label: "सर्प दंश", key: "35" },
    { name: "साधारण चोट", label: "साधारण चोट", key: "32" }
];


export const specialDoctorsList = [
    { id: 1, label: 'Dr. Smith', name: 'Cardiology' },
    { id: 2, label: 'Dr. Johnson', name: 'Neurology' },
    { id: 3, label: 'Dr. Lee', name: 'Orthopedics' },

];
export const chicks1 = [
    { name: "रेल से टक्कर", label: "रेल से टक्कर", key: "3" },
    { name: "रेलगाड़ी दुर्घटना / पटरी से उतरने से", label: "रेलगाड़ी दुर्घटना / पटरी से उतरने से", key: "11" },
    { name: "वायुयान दुर्घटनाग्रस्‍त", label: "वायुयान दुर्घटनाग्रस्‍त", key: "12" },
    { name: "शरारत पूर्ण गर्भपात", label: "शरारत पूर्ण गर्भपात", key: "21" },
    { name: "सर्प दंश", label: "सर्प दंश", key: "35" },
    { name: "साधारण चोट", label: "साधारण चोट", key: "32" }
]
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
