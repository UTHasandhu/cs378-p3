import React from 'react';
import '../App.css';

const TitleComponent = () => {
    return (
        <div className="row align-items-center">
            <div className="col-4">
                <img src={`${process.env.PUBLIC_URL}/images/Cafe Delight.png`} alt="Cafe Logo" className="logo"/>
            </div>
            <div className="col px-0">
                <h1 className="title">Cafe Delight</h1>
            </div>
        </div>
    );
};

export default TitleComponent;
