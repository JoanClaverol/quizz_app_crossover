import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Quizz from './components/Quizz';
import UserForm from './components/UserForm';
// import data from "./assets/data";
import useFetchData from './components/useFetchData';

function App() {

  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  const url = 'https://opentdb.com/api.php?amount=4';
  const data = useFetchData(url).data.results;

  return (
    <div className="App">
      <Header userName={userName} />
      <UserForm userName={userName} setUserName={setUserName} />
      <Quizz score={score} setScore={setScore} data={data} />
      {userName ?
        <h2 className="score">{
          userName.charAt(0).toUpperCase() + userName.slice(1)
        } Score {score} / {data.length}</h2> :
        <h2 className="score">Please enter your name to see your results</h2>}
    </div>
  );
}

export default App;
