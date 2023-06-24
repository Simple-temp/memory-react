import { useQuery } from '@apollo/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import { GET_MEMORY } from "../Graphql/Query"

const ShowMemory = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/api/getdata');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();

    // }, []);

    const { loading, error, data: memoryData } = useQuery(GET_MEMORY)

    return (
        <div>
            <h1 className='text-center my-2'>Your post </h1>
            <Col lg={6} className='mx-auto text-center'>
                {
                    loading ? <p>Loading..</p>
                        : error ? <p>{error.message}</p>
                            : memoryData.getmemory.map((item) => (
                                <div key={item._id}>
                                    <p>Post name : {item.name}</p>
                                    <strong>post image</strong>
                                    <img src={item.file} alt="" className='img-fluid' />
                                </div>
                            ))
                }
            </Col>
        </div>
    );
};

export default ShowMemory;