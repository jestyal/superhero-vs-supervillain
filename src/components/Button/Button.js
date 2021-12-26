import {useState} from "react";
import "./Button.scss";

export default function Button(props) {
    const [checked, setChecked] = useState(props.checked || false);

    const handleClick = () => {
        setChecked(!checked);
    }

    return (
        <button className={"Btn " + (checked ? "js_active" : "")} checked={checked} onClick={handleClick}>
            {checked ? "Выбрано" : "Выбрать тариф"}
        </button>
    );
}