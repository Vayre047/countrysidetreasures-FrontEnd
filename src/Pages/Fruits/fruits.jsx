import { useEffect, useState } from 'react';
//import Card from '../../Components/Card/card';
import './fruits.css';
import axios from 'axios';

const API_URL = "http://localhost:5005";

function Fruits(){
    const [ products, setProducts ] = useState();

    useEffect(() =>{
        axios.get(`${API_URL}/api/products`)
            .then((response) => setProducts(response.data))
        .then((error) => {console.log(error)});
    }, []);

    return(
        <div>
            {products.map((product) => {
                return(
                    <div key={product._id}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Fruits;