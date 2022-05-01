import React, {useState} from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { useNavigate } from 'react-router-dom';

import { Container, Form, Button, Stack } from 'react-bootstrap';

import { API } from '../config/api'

export default function AddBook() {

    let navigate = useNavigate();

    const title = "AddBook"
    document.title = 'Ways Books | ' + title

  const [preview, setPreview] = useState(); //For image preview

  const [form, setForm] = useState({
    title: "",
    publicationDate: "",
    pages: "",
    author: "",
    isbn: "",
    price: "",
    description: "",
    bookAttachment: "",
    thumbnail: "",
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

const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        // Create Configuration Content-type here ...
        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("publicationDate", form.publicationDate);
        formData.append("pages", form.pages);
        formData.append("author", form.author);
        formData.append("isbn", form.isbn);
        formData.append("price", form.price);
        formData.append("description", form.description);
        formData.append("bookAttachment", form.bookAttachment);        
        formData.append("thumbnail", form.bookFile[0], form.bookFile[0].name);

        // Insert data user to database here ...
        const response = await API.post('/book', formData, config)
        console.log(response);
        navigate('/ListTrans');
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div >
      <NavbarAdmin />
      <Container style={{ width: '995px', marginBottom: '50px'}}>
                <h4 className='py-3'>Add Book</h4>
                <Form onSubmit={handleSubmit}>
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
                        <Form.Control
                            type="text"
                            placeholder="bookAttachment"
                            name="bookAttachment"
                            onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={5}
                            placeholder="About This Book"
                            name="description"
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
                        <Button variant='dark' type="submit" className="ms-auto">Add My List</Button>
                    </Stack>
                </Form>
            </Container>
    </div>
  )
}
