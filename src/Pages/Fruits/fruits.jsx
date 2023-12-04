import { useEffect, useState } from 'react';
//import Card from '../../Components/Card/card';
import './fruits.css';
import axios from 'axios';

const API_URL = "http://localhost:5005";

function Fruits(){
    const [ fruits, setFruits ] = useState();

    useEffect(() =>{
        axios.get(`${API_URL}/api/fruits`)
        .then((response) => setFruits(response.data))
        .then((error) => {console.log(error)});
    }, []);

    return(
        <div>
            {fruits.map((fruit) => {
                return(
                    <div key={fruit._id}>
                        <h1>{fruit.name}</h1>
                        <p>{fruit.description}</p>
                        <span>{fruit.price}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Fruits;