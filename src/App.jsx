import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/navbar';
import SignUpPage from './Pages/SignUp/signup';
import LogInPage from './Pages/LogIn/login';
import Footer from './Components/Footer/footer';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path='/' /> */}
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
