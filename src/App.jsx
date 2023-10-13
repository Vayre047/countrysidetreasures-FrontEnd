import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/navbar';
import SignUpPage from './Pages/SignUp/signup';
import LogInPage from './Pages/LogIn/login';
import Footer from './Components/Footer/footer';
import Homepage from './Pages/HomePage/homepage';
import AboutUs from './Pages/AboutUs/aboutus';
import Menu from './Components/Menu/menu';

function App() {

  return (
    <div>
      <NavBar />
      <Menu />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
