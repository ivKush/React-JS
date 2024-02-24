import logo from './logo.svg';
import './App.css';
import Greeting from '../seminar3/task1';
import CurrentTime from '../seminar1/CurrentTime';
import EventCard from '../seminar1/EventCard';
import Counter from '../seminar3/task2';

/*
Установить Node.js и NPM (если еще не установлены).
Создать новый проект React, используя Create React App, выполнив команду npx create-react-app my-first-react-app в терминале.
Запустить проект, используя команду npm start в директории проекта, и убедиться, что приложение отображается в браузере.
Заменить шаблонный текст на произвольный
*/

function App() {
  return (
    <div className="App">
      <Greeting name='Ivan'/> 
      <Counter />
    </div>
  );
}

export default App;
