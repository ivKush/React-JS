
import './App.css';
// import Message from './homeWork1/Message';
// import CommentsList from './homeWork2/task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homeWork4/homePage';
import AboutPage from './homeWork4/aboutPage';

function App() {
  return (
    // <div className="App">
    //   <Message text={'Произвольный текст'}/>
    //   <CommentsList />      
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
