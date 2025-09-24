import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Price from './pages/Price'
import Media from './pages/Media'
import WhyJewar from './pages/WhyJewar'
import Amenities from './pages/Amenities'
import Faq from './pages/Faq'
import SiteVisit from './pages/SiteVisit'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import AdminDash from './pages/Dashboard/AdminDash'
import BlogDetails from './pages/BlogDetails'
import AdminHome from './pages/Dashboard/AdminHome'
import AdminAbout from './pages/Dashboard/AdminAbout'
import AdminWhyJewar from './pages/Dashboard/AdminWhyJewar'
import AdminFaq from './pages/Dashboard/AdminFaq'
import AdminMedia from './pages/Dashboard/AdminMedia'
import ThankYouPage from './pages/ThankYouePage'
import Chatbot from './components/Chatbot'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import PrivacyPolicy from './pages/PrivacyPlolicy'
import FloatingButton from './components/FloatingButton'
import FloatingBrochure from './components/FloatingBrochure'
import PopupForm from './components/PopupForm'

function Layout({ children }) {
  const location = useLocation();

  // Pages where we don't want Navbar/Footer
  const hideLayout = ["/auth", "/login"];

  return (
    <>
      {!hideLayout.includes(location.pathname) && <Navbar />}
      {children}
      {!hideLayout.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <FloatingBrochure />
      <SmoothScroll/>
      <FloatingButton />
      <Layout>
        <PopupForm/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/why-jewar" element={<WhyJewar />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/site-visit" element={<SiteVisit />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminAbout" element={<AdminAbout />} />
          <Route path="/adminWhyJewar" element={<AdminWhyJewar />} />
          <Route path="/adminFaq" element={<AdminFaq />} />
          <Route path="/adminMedia" element={<AdminMedia />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        {/* Chatbot always visible */}
        <Chatbot />
      </Layout>
    </Router>
   
  );
}

export default App;
