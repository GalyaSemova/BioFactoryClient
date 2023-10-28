import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/users/all')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/api/products/all')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.address || 'No address available'}</li>
                ))}
            </ul>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name|| 'No  product available'}</li>
                ))}

            </ul>
        </div>
    );
}

export default UserList;