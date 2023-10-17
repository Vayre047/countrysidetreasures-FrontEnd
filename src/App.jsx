import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/navbar';
import SignUpPage from './Pages/SignUp/signup';
import LogInPage from './Pages/LogIn/login';
import Footer from './Components/Footer/footer';
import Homepage from './Pages/HomePage/homepage';
import AboutUs from './Pages/AboutUs/aboutus';
import Menu from './Components/Menu/menu';
import Meat from './Pages/Meat/meat';
import Fruits from './Pages/Fruits/fruits';
import DryFruits from './Pages/Dry Fruits/dry-fruits';
import Vegetables from './Pages/Vegetables/vegetables';
import Teas from './Pages/Teas/teas';

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
        <Route path="/meat" element={<Meat />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dry-fruits" element={<DryFruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/teas" element={<Teas />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
