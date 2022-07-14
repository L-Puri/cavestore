import './App.css';
import Phones from "./phones.json";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/phones' element={ <Phones /> } />
      </Routes>
    </div>
  );
}

export default App
