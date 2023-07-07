import Input from "./Input";
import { useRef } from "react";

const App = () => {
    const nameRef = useRef();
    return (
        <div>
            <h1>Forward Refs</h1>
            <Input ref={nameRef}/>
        </div>
    );
};

export default App;