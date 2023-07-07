import { useState } from "react";
import Child from "./Child";

const Parent = () => {
const [text, setText] = useState("Hello World");
    const message = (msg) => {
        setText(msg);
    }
    return (
        <>
        <h1>{text}</h1>
        <Child parentFunction={message} />
        </>
    )
}

export default Parent;