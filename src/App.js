import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import TitleComponent from './components/TitleComponent';
import SubtitleComponent from './components/SubtitleComponent';
import menuItems from './menuData';

function App() {
    const [itemCounts, setItemCounts] = useState(menuItems.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
    }, {}));
    const [total, setTotal] = useState(0);

    /* Add button functionality */
    const handleAdd = (id, price) => {
        setItemCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
        setTotal(prev => prev + price);
    };

    /* Remove button functionality */
    const handleRemove = (id, price) => {
        if (itemCounts[id] > 0) {
            setItemCounts(prev => ({ ...prev, [id]: prev[id] - 1 }));
            setTotal(prev => prev - price);
        }
    };

    /* Order button functionality */
    const handleOrder = () => {
        if (total > 0) {
            /* Shows a short summary of ordered items on alert screen */ 
            const orderSummary = menuItems.reduce((acc, item) => {
                if (itemCounts[item.id] > 0) { 
                    acc.push(`${itemCounts[item.id]}x ${item.title}`);
                }
                return acc;
            }, []).join(", ");
            alert(`Order placed! Your items: ${orderSummary}. Total: $${total.toFixed(2)}`);
            handleClearAll();
        } else {
            alert("No items in cart");
        }
    };

    /* Clear All button functionality */
    const handleClearAll = () => {
        setItemCounts(menuItems.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
        }, {}));
        setTotal(0);
    };

    return (
        <div className="container">
            <TitleComponent />
            <SubtitleComponent />
            <div className="row">
                {menuItems.map(item => (
                    <div className="col-md-6" key={item.id}>
                        <MenuItem 
                            {...item} 
                            count={itemCounts[item.id]}
                            onAdd={() => handleAdd(item.id, item.price)}
                            onRemove={() => handleRemove(item.id, item.price)}
                        />
                    </div>
                ))}
            </div>
            <div className="order-clear-container">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="order-clear-buttons" onClick={handleOrder}>Order</button>
                <button className="order-clear-buttons" onClick={handleClearAll}>Clear all</button>
            </div>
        </div>
    );
}

export default App;

