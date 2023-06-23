import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import axios from "axios"

const PostMemory = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    const handleChange = (e) => {
        const newfile = e.target.files[0]
        setFile(newfile)
    }

    const submitForm = async (e) => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)

        try {
            const response = await axios.post('http://localhost:4000/api/memorypost', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div>
            <Col lg={6} className='mx-auto mt-3'>
                <Form onSubmit={(e) => submitForm(e)} encType='multipart/form-data'>
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