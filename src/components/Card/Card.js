import "./Card.css";

function Card(props) {
    return (
        <div className="Card">
            <div className="comics__item">
                <div className="comics__img">
                    <img src={props.img} alt="" />
                    {/*<img src="../../assets/images/mystique.jpg" alt="" />*/}
                    {/*<img src={require(`../../assets/images/${props.img}`).default} alt={props.name} />*/}

                </div>
                <div className="comics__info">
                    <div className="comics__universe">Вселенная: <span>{props.universe}</span></div>
                    <div className="comics__nickname">Прозвище: <span>{props.nickname}</span></div>
                    <div className="comics__name">Настоящее имя: <span>{props.name}</span></div>
                    <div className="comics__type">Вид: <span>{props.type}</span></div>
                    <div className="comics__position">Позиция: <span>{props.position}</span></div>
                    <div className="comics__enemies">Враги: <span>{props.enemies}</span></div>
                    <div className="comics__allies">Союзники: <span>{props.allies}</span></div>
                    <div className="comics__feature">Способности: <span>{props.feature}</span></div>
                    <div className="comics__info">Описание: <span>{props.info}</span></div>
                </div>

            </div>
        </div>
    );
}

export default Card;