import './currentTime.css';
/*
Создать функциональный компонент CurrentTime, который будет отображать текущее время, форматированное в удобочитаемом виде (например, "Текущее время: 14:35").
Использовать объект Date для получения текущего времени и метод toLocaleTimeString() для его форматирования.
Импортировать компонент CurrentTime в App.js и использовать его внутри компонента App, чтобы отобразить текущее время на странице.
Добавить минимальную стилизацию для компонента CurrentTime, чтобы выделить отображаемое время (например, использовать <h2> для заголовка и немного CSS для улучшения внешнего вида).
*/

function CurrentTime() {
    let time = new Date().toLocaleTimeString();

    return (
        <h1 className="currentTime">Текущее время: <span className='timeCss'>{time}</span></h1>
    )
}

export default CurrentTime;

