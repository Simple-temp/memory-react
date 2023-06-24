import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import axios from "axios"
import { useMutation } from '@apollo/client';
import { POST_MEMORY } from '../Graphql/Mutation';

const PostMemory = () => {

    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [NewPost] = useMutation(POST_MEMORY)

    const handleBlur = (e) => {
        setName(e.target.value);
    }

    const handleChange = (e) => {
        setFile(e.target.files[0])
    }

    const submitForm = async (e) => {

        e.preventDefault(e)

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', name)

        NewPost({
            variables: {
                name,
                file
            }
        })

        // try {
        //     const response = await axios.post('http://localhost:4000/api/memorypost', formData);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }

    }


    return (
        <div>
            <Col lg={6} className='mx-auto mt-3'>
                <Form onSubmit={(e) => submitForm(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" onBlur={handleBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>FIle</Form.Label>
                        <Form.Control type="file" name="file" onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </div>
    );
};

export default PostMemory;