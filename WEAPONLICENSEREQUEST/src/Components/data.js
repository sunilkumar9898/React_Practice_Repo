export const labelnames = [
    {
        name: "applicantName",
        title: "आवेदक का नाम",
        placeholder: "आवेदक का नाम दर्ज करें",
        required: true,
        type: "text",
    },
    {
        name: "relationType",
        title: "संबंध प्रकार",
        placeholder: "संबंध प्रकार चुनें",
        type: "dropdown"
    },
    {
        name: "relationName",
        title: "संबंधी का नाम",
        placeholder: "संबंधी का नाम दर्ज करें",
        type: "text"
    },
    {
        name: "occupation",
        title: "व्यवसाय",
        placeholder: "व्यवसाय चुनें",
        type: "dropdown"
    },
    {
        name: "gender",
        title: "लिंग",
        placeholder: "लिंग चुनें",
        type: "dropdown",
        required:true
    },
    {
        name: "servicePurpose",
        title: "इस सेवा को प्राप्त करने के लिए उद्देश्य*",
        placeholder: "उद्देश्य दर्ज करें",
        type: "text"
    }

]


export const labelnames1 = [
    {
        name: "basisForWeapons",
        title: "हथियारों के आधार ",
        placeholder: "विवरण दर्ज करें",
        type: "text",
        required: true

    },
    {
        name: "specialClaim",
        title: "यदि आवेदक किसी विशेष विवाद का दावा करता है ",
        placeholder: "विवरण दर्ज करें",
        type: "text"
    },
    {
        name: "dob",
        title: "जन्म तिथि*",
        placeholder: "DD/MM/YYYY",
        required: true,
        type: "date",
    },
    {
        name: "age",
        title: "आयु (वर्ष/महीना)",
        placeholder: "आयु दर्ज करें",
        type: "number"
    },
    {
        name: "dobYear",
        title: "जन्म का वर्ष",
        placeholder: "वर्ष दर्ज करें",
        type: "number"
    },
    {
        name: "ageRange",
        title: "आयु सीमा (से - तक)",
        placeholder: "आयु सीमा दर्ज करें",
        type: "number"
    }
]


export const addressFields = [
    {
        name: "houseNumber",
        title: "मकान संख्या",
        placeholder: "मकान संख्या दर्ज करें",
        type: "text"
    },
    {
        name: "streetName",
        title: "सड़क का नाम",
        placeholder: "सड़क का नाम दर्ज करें",
        type: "text"
    },
    {
        name: "colony",
        title: "कॉलोनी/बाजार/क्षेत्र",
        placeholder: "कॉलोनी/बाजार/क्षेत्र दर्ज करें",
        type: "text"
    },
    {
        name: "villageTownCity",
        title: "ग्राम/नगर/शहर",
        placeholder: "ग्राम/नगर/शहर दर्ज करें",
        required: true,
        type: "text",
    },
    {
        name: "subDistrict",
        title: "तहसील/ब्लॉक/मंडल",
        placeholder: "तहसील/ब्लॉक/मंडल दर्ज करें",
        type: "text"
    },
    {
        name: "currentAddress",
        title: "वर्तमान पता",
        placeholder: "वर्तमान पता दर्ज करें",
        type: "radio",
        required: true,
        Radio: [
            { name: "हाँ", value:"हाँ" ,key:"हाँ"},
            { name: "नहीं", value:"नहीं", key:"नहीं"}
        ]

    }

];

export const addressFields1 = [
    {
        name: "country",
        title: "देश",
        placeholder: "देश चुनें",
        type: "dropdown",
        required: true

    },
    {
        name: "state",
        title: "राज्य",
        placeholder: "राज्य चुनें",
        type: "dropdown",
        required: true

    },
    {
        name: "district",
        title: "जिला",
        placeholder: "जिला चुनें",
        type: "dropdown",
        required: true

    },
    {
        name: "policeStation",
        title: "पुलिस स्टेशन",
        placeholder: "पुलिस स्टेशन चुनें",
        type: "dropdown",
        required: true

    },
    {
        name: "pinCode",
        title: "पिन कोड",
        placeholder: "पिन कोड दर्ज करें",
        type: "text"
    }
]

export const initialValues = {
    applicantName: "",
    relationType: "",
    relationName: "",
    occupation: "",
    gender: "",
    servicePurpose: "",
    basisForWeapons: "",
    specialClaim: "",
    dob: "",
    age: "",
    dobYear: "",
    ageRange: "",
    houseNumber: "",
    streetName: "",
    colony: "",
    villageTownCity: "",
    subDistrict: "",
    currentAddress: "", // For radio, default can be "", "हाँ", or "नहीं"
    country: "",
    state: "",
    district: "",
    policeStation: "",
    pinCode: ""
};


export const relationshipTypes = [
    { name: "parent", label: "माता-पिता" },
    { name: "spouse", label: "पति/पत्नी" },
    { name: "sibling", label: "भाई/बहन" },
    { name: "child", label: "बच्चा" },
    { name: "relative", label: "रिश्तेदार" },
    { name: "friend", label: "मित्र" },
    { name: "guardian", label: "अभिभावक" }
];


export const occupations = [
    { name: "teacher", label: "शिक्षक" },
    { name: "doctor", label: "डॉक्टर" },
    { name: "engineer", label: "इंजीनियर" },
    { name: "lawyer", label: "वकील" },
    { name: "farmer", label: "किसान" },
    { name: "business", label: "व्यवसायी" },
    { name: "student", label: "छात्र" },
    { name: "artist", label: "कलाकार" },
    { name: "governmentEmployee", label: "सरकारी कर्मचारी" },
    { name: "privateSectorEmployee", label: "निजी क्षेत्र कर्मचारी" },
    { name: "selfEmployed", label: "स्वरोजगार" },
    { name: "retired", label: "सेवानिवृत्त" },
    { name: "unemployed", label: "बेरोजगार" }
];


export const genders = [
    { name: "male", label: "पुरुष" },
    { name: "female", label: "महिला" },
    { name: "other", label: "अन्य" }
];


export const districts = [
    { name: "ajmer", label: "अजमेर" },
    { name: "alwar", label: "अलवर" },
    { name: "banswara", label: "बांसवाड़ा" },
    { name: "baran", label: "बारां" },
    { name: "barmer", label: "बाड़मेर" },
    { name: "bharatpur", label: "भरतपुर" },
    { name: "bhilwara", label: "भीलवाड़ा" },
    { name: "bikaner", label: "बीकानेर" },
    { name: "bundi", label: "बूंदी" },
    { name: "chittorgarh", label: "चित्तौड़गढ़" },
    { name: "churu", label: "चूरू" },
    { name: "dausa", label: "दौसा" },
    { name: "dholpur", label: "धौलपुर" },
    { name: "dungarpur", label: "डूंगरपुर" },
    { name: "hanumangarh", label: "हनुमानगढ़" },
    { name: "jaipur", label: "जयपुर" },
    { name: "jaisalmer", label: "जैसलमेर" },
    { name: "jalore", label: "जालोर" },
    { name: "jhalawar", label: "झालावाड़" },
    { name: "jhunjhunu", label: "झुंझुनू" },
    { name: "jodhpur", label: "जोधपुर" },
    { name: "karauli", label: "करौली" },
    { name: "kota", label: "कोटा" },
    { name: "nagaur", label: "नागौर" },
    { name: "pali", label: "पाली" },
    { name: "pratapgarh", label: "प्रतापगढ़" },
    { name: "rajsamand", label: "राजसमंद" },
    { name: "sawaiMadhopur", label: "सवाई माधोपुर" },
    { name: "sikar", label: "सीकर" },
    { name: "sirohi", label: "सिरोही" },
    { name: "sriGanganagar", label: "श्री गंगानगर" },
    { name: "tonk", label: "टोंक" },
    { name: "udaipur", label: "उदयपुर" }
];


export const policeStations = [
    { name: "grpAjmer", label: "GRP अजमेर" },
    { name: "grpJaipur", label: "GRP जयपुर" },
    { name: "grpJodhpur", label: "GRP जोधपुर" },
    { name: "grpKota", label: "GRP कोटा" },
    { name: "grpBikaner", label: "GRP बीकानेर" },
    { name: "grpUdaipur", label: "GRP उदयपुर" },
    { name: "grpBharatpur", label: "GRP भरतपुर" },
    { name: "grpAlwar", label: "GRP अलवर" },
    { name: "grpDholpur", label: "GRP धौलपुर" },
    { name: "grpSriganganagar", label: "GRP श्रीगंगानगर" },
    { name: "grpHanumangarh", label: "GRP हनुमानगढ़" },
    { name: "grpJaisalmer", label: "GRP जैसलमेर" },
    { name: "grpBarmer", label: "GRP बाड़मेर" },
    { name: "grpNagaur", label: "GRP नागौर" },
    { name: "grpPali", label: "GRP पाली" },
    { name: "grpSikar", label: "GRP सीकर" },
    { name: "grpTonk", label: "GRP टोंक" },
    { name: "grpBhilwara", label: "GRP भीलवाड़ा" },
    { name: "grpBundi", label: "GRP बूंदी" },
    { name: "grpDausa", label: "GRP दौसा" },
    { name: "grpBaran", label: "GRP बारां" },
    { name: "grpChuru", label: "GRP चूरू" },
    { name: "grpJhunjhunu", label: "GRP झुंझुनू" },
    { name: "grpJhalawar", label: "GRP झालावाड़" },
    { name: "grpBanswara", label: "GRP बांसवाड़ा" },
    { name: "grpDungarpur", label: "GRP डूंगरपुर" },
    { name: "grpRajsamand", label: "GRP राजसमंद" },
    { name: "grpPratapgarh", label: "GRP प्रतापगढ़" },
    { name: "grpSawaiMadhopur", label: "GRP सवाई माधोपुर" },
    { name: "grpSirohi", label: "GRP सिरोही" },
    { name: "grpMavliJunction", label: "GRP मावली जंक्शन" }
];


export const states = [
    { name: "andhraPradesh", label: "आंध्र प्रदेश" },
    { name: "arunachalPradesh", label: "अरुणाचल प्रदेश" },
    { name: "assam", label: "असम" },
    { name: "bihar", label: "बिहार" },
    { name: "chhattisgarh", label: "छत्तीसगढ़" },
    { name: "goa", label: "गोवा" },
    { name: "gujarat", label: "गुजरात" },
    { name: "haryana", label: "हरियाणा" },
    { name: "himachalPradesh", label: "हिमाचल प्रदेश" },
    { name: "jharkhand", label: "झारखंड" },
    { name: "karnataka", label: "कर्नाटक" },
    { name: "kerala", label: "केरल" },
    { name: "madhyaPradesh", label: "मध्य प्रदेश" },
    { name: "maharashtra", label: "महाराष्ट्र" },
    { name: "manipur", label: "मणिपुर" },
    { name: "meghalaya", label: "मेघालय" },
    { name: "mizoram", label: "मिजोरम" },
    { name: "nagaland", label: "नगालैंड" },
    { name: "odisha", label: "ओडिशा" },
    { name: "punjab", label: "पंजाब" },
    { name: "rajasthan", label: "राजस्थान" },
    { name: "sikkim", label: "सिक्किम" },
    { name: "tamilNadu", label: "तमिलनाडु" },
    { name: "telangana", label: "तेलंगाना" },
    { name: "tripura", label: "त्रिपुरा" },
    { name: "uttarPradesh", label: "उत्तर प्रदेश" },
    { name: "uttarakhand", label: "उत्तराखंड" },
    { name: "westBengal", label: "पश्चिम बंगाल" }
];


 export const countries = [
    { name: "india", label: "भारत" },
    { name: "usa", label: "संयुक्त राज्य अमेरिका" },
    { name: "canada", label: "कनाडा" },
    { name: "uk", label: "यूनाइटेड किंगडम" },
    { name: "australia", label: "ऑस्ट्रेलिया" },
    { name: "germany", label: "जर्मनी" },
    { name: "france", label: "फ्रांस" },
    { name: "japan", label: "जापान" },
    { name: "china", label: "चीन" },
    { name: "russia", label: "रूस" },
    { name: "brazil", label: "ब्राज़ील" },
    { name: "southAfrica", label: "दक्षिण अफ्रीका" },
    { name: "newZealand", label: "न्यूजीलैंड" },
    { name: "italy", label: "इटली" },
    { name: "spain", label: "स्पेन" },
    { name: "netherlands", label: "नीदरलैंड" },
    { name: "sweden", label: "स्वीडन" },
    { name: "switzerland", label: "स्विट्ज़रलैंड" },
    { name: "mexico", label: "मेक्सिको" },
    { name: "argentina", label: "अर्जेंटीना" }
];
