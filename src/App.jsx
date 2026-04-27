import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Research from './pages/Research';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '6rem', opacity: 0.5, paddingBottom: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} Ibuki Kimpara. Built with React &amp; Vite.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
