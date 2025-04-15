
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './components/pages/login/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
