import React, { useState } from "react";

const Check = () => {
    const categories = [
        { name: "Accounting", key: "A" },
        { name: "Marketing", key: "M" },
        { name: "Production", key: "P" },
        { name: "Research", key: "R" },
    ];

    const [selectedCheck, setSelectedCheck] = useState([]);

    console.log(selectedCheck);

    const handleChange = (val) => {
        let validCheck = selectedCheck.some((ele) => ele === val);
        if (validCheck) {
            let newValue = selectedCheck.filter((ele) => ele !== val);
            setSelectedCheck(newValue);
        } else {
            setSelectedCheck((prev) => [...prev, val]);
            // setSelectedCheck.push(val)
            // selectedCheck.push(val)
        }
        console.log(validCheck);

                // setSelectedCheck((prevSelected) => {
                //     if (prevSelected.includes(val)) {
                //         return prevSelected.filter((ele) => ele !== val);
                //     } else {
                //         return [...prevSelected, val];
                //     }
                // });
    };

    return (
        <div>
            {categories.map((ele) => (
                <div>
                    <input
                        type="checkbox"
                        onChange={() => handleChange(ele.name)}
                        checked={selectedCheck.includes(ele.name)}
                    />
                    <p>{ele.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Check;
