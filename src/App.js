import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/menu' element={<Menu />} />
      </Routes>
    </Router>
  );
}



export default App;
