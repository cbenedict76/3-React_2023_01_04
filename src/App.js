import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CampsitesDirectoryPage /> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;