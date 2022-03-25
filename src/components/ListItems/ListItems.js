import React, { useEffect } from 'react';

const ListItems = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/lists')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListItems;