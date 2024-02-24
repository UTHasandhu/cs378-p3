import React from 'react';

const MenuItem = ({ title, description, imageName, price }) => {
    const imageUrl = process.env.PUBLIC_URL + `/images/${imageName}`;

    return (
        <div className="row menu-item">
            <div className="col-4">
                <img src={imageUrl} alt={title} className="menu-item-image" />
            </div>
            <div className="col-8">
                <h3 className="item-title">{title}</h3>
                <p className="item-description">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="price me-2">${price}</p>
                    <button className="btn add-button">Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
