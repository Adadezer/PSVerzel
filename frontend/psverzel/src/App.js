import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PsVerzelProvider from './context/PsVerzelProvider';

function App() {
  return (
    <PsVerzelProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PsVerzelProvider>
  );
}

export default App;
