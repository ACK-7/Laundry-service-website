import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ContactSection from './component/ContactSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 