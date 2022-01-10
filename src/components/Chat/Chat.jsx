import "./Chat.scss";
import {useState} from "react";

export default function Chat() {
    const [arrayMessages, changeArrayMessages] = useState([]);
    const [messageValue, changeMessageValue] = useState("");

    const handleChangeTextMsg = (event) => {
        changeMessageValue(event.target.value);
    }
    const handleSendMsg = () => {
        if (!messageValue) {
            return;
        }
        changeArrayMessages([
            messageValue,
            ...arrayMessages
        ]);
        changeMessageValue("");
    }

    return (
        <div className="form__wrap mb_40">
            <div className="form form_comment">
                <div className="comments__wrap">
                    {
                        arrayMessages.map((item, index) => (
                            <div key={index} className={`comment__item ` + (index === 0 ? `js_active` : ``)}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div className="form__item">
                    <input type="text" value={messageValue} onChange={handleChangeTextMsg} className="form__input"/>
                </div>
                <button className="btn" onClick={handleSendMsg}>Отправить</button>
            </div>
        </div>
    );
}