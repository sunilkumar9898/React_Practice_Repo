import { useState } from "react";
import "./App.css";
import FormField from "./Components/FormField";
import Inputfield from "./Components/Inputfield";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <FormField />
        {/* <Inputfield/> */}
        </>
    );
}

export default App;
