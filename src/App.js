import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Games from './components/Games/Games';
import GameDetail from './components/Details/Gamedetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/details/:id" element={<GameDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
