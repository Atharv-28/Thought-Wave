import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Feed from './Components/Feed/feed';
import Profile from './Components/Profile/profile'; 
import Bookmark from './Components/Bookmark/bookmark';
import Notification from './Components/Notification/notification';  
import Explore from './Components/Explore/explore'; 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />  
        <Route path="bookmark" element={<Bookmark />} />  
        <Route path="notification" element={<Notification />} />  
        <Route path="explore" element={<Explore />} />  
      </Routes>
    </div>
  );
}

export default App;
