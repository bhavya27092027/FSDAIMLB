import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const serverResponse = await fetch('https://fakestoreapi.com/products');
            const jsonData = await serverResponse.json();
            setData(jsonData);
            console.log(jsonData);
        }
        fetchData();
    }, []);

    function addToCart(item) {
        setCart(prevCart => [...prevCart, item]);
        alert(`Cart size: ${cart.length + 1}`);
    }

    return (
        <div>
            <div>
                {cart.length === 0 ? (
                    <h2>Cart is Empty</h2>
                ) : (
                    cart.map((item, index) => (
                        <div key={index}>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                )}
            </div>

            <h2 style={{ backgroundColor: 'green', color: 'white' }}>Dashboard</h2>

            {data.length === 0 ? (
                <h2>Data is not Available</h2>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li
                            style={{
                                border: '2px solid black',
                                listStyle: 'none',
                                marginBottom: '10px',
                            }}
                            key={item.id}
                        >
                            <img src={item.image} alt="" height={100} width={100} />
                            <strong>{item.title}</strong> — ${item.price}
                            <h6>{item.description}</h6>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;