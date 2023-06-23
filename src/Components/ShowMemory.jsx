import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';

const ShowMemory = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/getdata');
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    return (
        <div>
            <h1 className='text-center my-2'>Your post </h1>
            <Col lg={6} className='mx-auto text-center'>
                {
                    data.map((item) => (
                        <div key={item._id}>
                            <p>Post name : {item.name}</p>
                            <strong>post image</strong>
                            <img src={`http://localhost:4000/uploads/${item.file}`} alt="" className='img-fluid' />
                        </div>
                    ))
                }
            </Col>
        </div>
    );
};

export default ShowMemory;