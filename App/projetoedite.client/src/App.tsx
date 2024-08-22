import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './routes/Usuarios/Login';


const App: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/users" element={<UsersPage />} /> */}
        </Routes>
      </Router>
    );
  };

export default App;