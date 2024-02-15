import './EventCard.css'
/*
<EventCard title="Концерт группы Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл"/>
<EventCard title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум"/>
<EventCard title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха"/>
*/

function EventCard({props, title, date, location}) {
    return (
        <div>
            <h2>{title}</h2>
            <h4 className="date">дата выступления: {date}</h4>
            <h4 className="location">место проведения {location}</h4>
        </div>
    );
}

// function EventCard(probs) {
//     return (
//         <div>
//             <h2>{probs.title}</h2>
//             <h4 className="date">дата выступления: {probs.date}</h4>
//             <h4 className="location">место проведения {probs.location}</h4>
//         </div>
//     );
// }

export default EventCard;
