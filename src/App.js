import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Header  from "./Components/Common/Header";
import HomePage from "./Pages/HomePage"
import AutomatePage from './Pages/AutomatePage';

function App() {
  return (
    <div className="w-full h-full">

    

      <Routes>

 <Route path='/' element={<HomePage />} />

 <Route path='/automate' element={<AutomatePage />} />
     
      </Routes>
   
    </div>
  );
}

export default App;
