import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Feed from './Components/Feed/feed';
import Lists from './Components/Lists/lists'; 
import Profile from './Components/Profile/profile'; 
import Bookmark from './Components/Bookmark/bookmark';
import Messages from './Components/Messages/messages';  
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
        <Route path="messages" element={<Messages />} />  
        <Route path="notification" element={<Notification />} />  
        <Route path="explore" element={<Explore />} />  
        <Route path="more" element={<More />} />  

      </Routes>
    </div>
  );
}

export default App;
