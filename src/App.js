// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WebDevelopment from './web/WebDevelopment';
import Software from './software/software'; 
import It from './It/it';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web/web-development" element={<WebDevelopment />} />
        <Route path="/software/software-development" element={<Software />} />
        <Route path="/it/it-development" element={<It />} />
      </Routes>
    </Router>
  );
}

export default App;
