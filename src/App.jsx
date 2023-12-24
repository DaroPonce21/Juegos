import {Route, Routes} from 'react-router-dom'
import Memotest from './components/Memotest';
import WordsPerMinute from './components/WordsPerMinute';
import Pokemon from './components/Pokemon';
import Home from './components/Home';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/memotest' element={<Memotest/>}/>
    <Route path='/wpm' element={<WordsPerMinute/>}/>
    <Route path='/pokemon' element={<Pokemon/>}/>
  </Routes>
  );
}

export default App; 
