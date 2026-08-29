import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
// import { products } from '../../starting-code/data/products'


function HomePage({cart}) {

    // fetch('http://localhost:3000/api/products')
    //     .then((response) => {
    //         return response.json();
    //     }).then((data) => {console.log(data)});

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}

export default HomePage