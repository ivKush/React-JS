import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import Counter from './seminar2/task1';
import TextInput from './seminar2/task2';
import TodoList from './seminar2/task3';
import CurrentTime from './seminar2/task4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Counter /> */}
    {/* <TextInput /> */}
    {/* <TodoList /> */}
    {/* <CurrentTime /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
