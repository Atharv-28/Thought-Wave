import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Feed from './Components/Feed/feed';
import Lists from './Components/Lists/lists'; 
import Profile from './Components/Profile/profile'; 
import Bookmark from './Components/Bookmark/bookmark';
import Message from './Components/Messages/message';  
import Notification from './Components/Notification/notification';  
import Explore from './Components/Explore/explore'; 
import More from './Components/More/more';  


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="feed" element={<Feed />} />
        <Route path="lists" element={<Lists />} />  
        <Route path="profile" element={<Profile />} />  
        <Route path="bookmark" element={<Bookmark />} />  
        <Route path="messages" element={<Message />} />  
        <Route path="notification" element={<Notification />} />  
        <Route path="explore" element={<Explore />} />  
        <Route path="more" element={<More />} />  

      </Routes>
    </div>
  );
}

export default App;
