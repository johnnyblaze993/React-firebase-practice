import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
<<<<<<< Updated upstream
=======
import Navbar from './components/Navbar';
import MakePost from './pages/Make-post/MakePost';
import Logout from './pages/Logout';
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
<<<<<<< Updated upstream
=======
          <Route path="/makepost" element={<MakePost />} />
          <Route path="/logout" element={<Logout />} />
>>>>>>> Stashed changes
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
