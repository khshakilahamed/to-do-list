import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import ListItems from '../ListItems/ListItems';
import './Home.css'

const Home = () => {
    const [item, setItem] = useState('');

    const handleOnBlur = (e) => {
        // const field = e.target.field;
        const value = e.target.value;
        setItem( value);
    }

    const email = 'khshakil.ahemd18@gmail.com'

    const handleAddList = () => {
        console.log(item);
        fetch('http://localhost:5000/lists', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email, item})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='home-container'>
            <div className="container d-flex justify-content-center">
                <div className='input-field pt-5 '>
                    <InputGroup >
                        <Form.Control onBlur={handleOnBlur} name='item' id="input" type="email" placeholder="Add a item" />
                        <button onClick={handleAddList} className='btn btn-primary'>Add</button>
                    </InputGroup>
                </div>
            </div>
            <div className="container">
               <div className="px-5 mx-5">
                    <ListItems></ListItems>
               </div>
            </div>
        </div>
    );
};

export default Home;