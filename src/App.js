import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage"
import AutomatePage from './Pages/AutomatePage';
import AccountFeedPage from './Pages/AccountFeedPage';
import RequestAccess from './Pages/RequestAccess';
import Login from './Pages/Login';
import RequestRecieve from './Pages/RequestRecieve';
import AccountManagement from './Pages/AccountManagement';
import Connection from './Pages/Connection';
import Topics from './Pages/Topics';
import SchedulePost from './Pages/SchedulePost';
import GeneratePage from './Pages/GeneratePage';
import AdminGenerate from './Pages/AdminGenerate';


function App() {
  return (
    <div className="w-full h-full">

    

      <Routes>

 <Route path='/' element={<HomePage />} />

 <Route path='/connection' element={<Connection />}   />

 <Route path='/automate' element={<AutomatePage />} />

 <Route path='/adminGenerate' element={<AdminGenerate />}   />

 <Route path='/login' element={<Login />}   />

 <Route path='/accountFeeds' element={<AccountFeedPage />} />

 <Route path='/generate' element={<GeneratePage />}   /> 

 <Route path="/requestAccess" element={<RequestAccess />} />

 <Route path='/requestRecieve' element={<RequestRecieve />} />

 <Route path='/accountManagement' element={<AccountManagement />} />

 <Route path='/schedulePost' element={<SchedulePost />}  />

 <Route path='/topic' element={<Topics />} />
     
      </Routes>
   
    </div>
  );
}

export default App;
