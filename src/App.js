import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Quizz from './components/Quizz';
import UserForm from './components/UserForm';
import useFetchData from './components/useFetchData';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  const url = 'https://opentdb.com/api.php?amount=6';
  const { data, loading, error } = useFetchData(url);

  return (
    <div className="App">
      <Header userName={userName} />
      <UserForm userName={userName} setUserName={setUserName} />
      <Quizz score={score} setScore={setScore} data={data.results} />
      {userName ?
        <h1 className="score">{
          userName.charAt(0).toUpperCase() + userName.slice(1)
        } Score {score} / {data.results.length}</h1> :
        <h1 className="score">Please enter your name to see your results</h1>}
    </div>
  );
}

export default App;
