import React, { useState } from "react";

const DynamicDropdown = () => {
    const stateDistricts = {
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
        UP: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    };

    const [selectedState, setSelectedState] = useState("");
    const [districts, setDistricts] = useState([]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setDistricts(stateDistricts[state] || []);
    };

    return (
        <div>
            <label htmlFor="state">Select State:</label>
            <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}>
                <option value="">--Select State--</option>
                {Object.keys(stateDistricts).map((state) => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>

            <label htmlFor="district">Select District:</label>
            <select id="district" disabled={!selectedState}>
                <option value="">--Select District--</option>
                {districts.map((district) => (
                    <option key={district} value={district}>
                        {district}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DynamicDropdown;
