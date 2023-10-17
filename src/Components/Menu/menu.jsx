import { Link } from 'react-router-dom';
import './menu.css';
import Meat from '../../Pages/Meat/meat';
import DryFruits from '../../Pages/Dry Fruits/dry-fruits';
import Vegetables from '../../Pages/Vegetables/vegetables';
import Fruits from '../../Pages/Fruits/fruits';
import Teas from '../../Pages/Teas/teas';

function Menu(){
    return(
        <div className='text-center menu-component'>
            <Link to="/meat" element={<Meat />} className='menuLink'>
                <button>Carnes</button>
            </Link>
            <Link to="/fruits" element={<Fruits />} className='menuLink'>
                <button>Frutas</button>
            </Link>
            <Link to="/dry-fruits" element={<DryFruits />} className='menuLink'>
                <button>Frutos Secos</button>
            </Link>
            <Link to="/vegetables" element={<Vegetables />} className='menuLink'>
                <button>Legumes</button>
            </Link>
            <Link to="/teas" element={<Teas />} className='menuLink'>
                <button>Chás</button>
            </Link>
        </div>
    );
}

export default Menu;