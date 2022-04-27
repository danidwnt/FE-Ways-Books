import React, {useState} from 'react'
import NavbarAdmin from '../components/NavbarAdmin'

import { Container, Form, Button, Stack } from 'react-bootstrap';

export default function AddBook() {

  const [preview, setPreview] = useState(); //For image preview

  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    price: "",
    about: "",
    bookFile: "",
})

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
    }
};

  return (
    <div >
      <NavbarAdmin />
      <Container style={{ width: '995px', marginBottom: '50px'}}>
                <h4 className='py-3'>Add Book</h4>
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            name="title"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="date"
                            placeholder="Publication Date"
                            name="publicationDate"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Pages"
                            name="pages"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Author"
                            name="author"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ISBN"
                            name="isbn"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            name="price"
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={5}
                            placeholder="About This Book"
                            name="about"
                            onChange={handleChange} />
                    </Form.Group>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type='file'
                                name="bookFile"
                                onChange={handleChange} />
                        </Form.Group>
                    </Stack>
                    {preview && (
                        <div>
                            <img src={preview} style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover", }} alt="preview" />
                        </div>
                    )}
                    <Stack direction="horizontal" gap={2}>
                        <Button variant='dark' className="ms-auto">Add My List</Button>
                    </Stack>
                </Form>
            </Container>
    </div>
  )
}
