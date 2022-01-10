import { useState } from "react";
import "./Rate.scss";
import "../Button/Button.scss";

export default function Rate({ title, desc, price, speed }) {

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);


    }



    return (
        <div className={`Rate__item ` + (checked ? "js_active" : '')}>
            <div className="Rate__title">{title}</div>
            <div className="Rate__price">
                <span className="">руб</span>
                <span className="">{price}</span>
                <span className="">/мес</span>
            </div>
            <div className="Rate__speed">до {speed} Мбит/сек</div>
            <div className="Rate__desc">{desc}</div>
            <div className="Rate__btn-wrap">
                {/*<Button />*/}
                <button className={"Btn " + (checked ? "js_active" : "")} onClick={handleClick}>
                    {checked ? "Выбрано" : "Выбрать тариф"}
                </button>
            </div>
        </div>
    );
}