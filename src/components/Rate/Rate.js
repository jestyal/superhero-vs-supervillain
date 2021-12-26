import "./Rate.scss";
import Button from "../Button/Button";

export default function Rate({ title, desc, price, speed, isActive }) {

    return (
        <div className={`Rate__item ` + (isActive ? "js_active" : '')}>
            <div className="Rate__title">{title}</div>
            <div className="Rate__price">
                <span className="">руб</span>
                <span className="">{price}</span>
                <span className="">/мес</span>
            </div>
            <div className="Rate__speed">до {speed} Мбит/сек</div>
            <div className="Rate__desc">{desc}</div>
            <div className="Rate__btn-wrap">
                <Button />
            </div>
        </div>
    );
}