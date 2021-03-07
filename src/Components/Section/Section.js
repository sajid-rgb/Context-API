import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import Header from '../Header';
const allProducts =[{name:'asus',category:'laptop'},{name:'lenovo',category:'laptop'},{name:'hp',category:'laptop',},
{name:'Nokia',category:'mobile'},{name:'Samsung',category:'mobile'},{name:'xiaomi',category:'mobile'}]

const Section = () => {
    const [products,setProducts] = useState([]);
    const category = useContext(CategoryContext)
    useEffect(()=>{
        const matchProduct = allProducts.filter(pd=>pd.category === category)
        setProducts(matchProduct)


    },[category])
    return (
        <div>
           <p>I am {category}</p> 
           {
               products.map(pd=><Header product={pd}></Header>)
           }
        </div>
    );
};

export default Section;