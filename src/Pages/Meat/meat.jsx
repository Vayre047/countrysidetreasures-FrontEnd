import Card from '../../Components/Card/card';
import axios from 'axios';
import './meat.css';

const API_URL = "http://localhost:5005";

function Meat(){

    return(
        <div className='cardContainer'>
            <Card />
        </div>
    );
}

export default Meat;