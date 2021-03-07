import React from 'react';

const Header = (props) => {
    const {name}= props.product;
    console.log(name);

    return (
        <div>
            <h6>Name: {name}</h6>
        </div>
    );
};

export default Header;