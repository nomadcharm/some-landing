import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
