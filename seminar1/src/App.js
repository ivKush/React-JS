import logo from './logo.svg';
import './App.css';
import Greeting from './testCompanent/Greeting';
import CurrentTime from './testCompanent/CurrentTime';
import EventCard from './testCompanent/EventCard';

/*
Установить Node.js и NPM (если еще не установлены).
Создать новый проект React, используя Create React App, выполнив команду npx create-react-app my-first-react-app в терминале.
Запустить проект, используя команду npm start в директории проекта, и убедиться, что приложение отображается в браузере.
Заменить шаблонный текст на произвольный
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Исправленный текст
        </p>
        <Greeting />
        <CurrentTime />
        <EventCard title="Концерт группы 'Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл" />
        <EventCard  title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум"/>
        <EventCard props='true'  title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Запуск react
        </a>
      </header>
    </div>
  );
}

export default App;
