import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Modern multi-tier tracker interface with React 19, Vite, React Router, and Bootstrap.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This project is the frontend for the OctoFit multi-tier tracking application.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container py-5">
        <header className="mb-4">
          <h1>OctoFit Tracker</h1>
          <p className="text-muted">A modern multi-tier tracker with React 19 and Vite.</p>
          <nav className="nav gap-3">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
