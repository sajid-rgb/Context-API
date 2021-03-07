import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Main = (props) => {
    const category = useContext(CategoryContext)
    const {count,setCount} = props;
    return (
        <div>
            <button onClick={()=>setCount("laptop")}>Laptop</button>
            <button onClick={()=>setCount("mobile")}>Mobile</button>

        </div>
    );
};

export default Main;