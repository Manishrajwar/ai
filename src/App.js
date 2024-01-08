import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage"
import AutomatePage from './Pages/AutomatePage';
import AccountFeedPage from './Pages/AccountFeedPage';

function App() {
  return (
    <div className="w-full h-full">

    

      <Routes>

 <Route path='/' element={<HomePage />} />

 <Route path='/automate' element={<AutomatePage />} />

 <Route path='/accountFeeds' element={<AccountFeedPage />} />
     
      </Routes>
   
    </div>
  );
}

export default App;
