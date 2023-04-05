import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom/dist";


function Home() {
  const navigate =useNavigate();
function logout(){
  navigate('/');
}

  const f = useFormik({
    initialValues: {
      first: "",
      last: "",
      mobile: "",
      city: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

  
    validationSchema: Yup.object({
      first: Yup.string()
        .min(3, "must have 3 characters")
        .max(6, "max of 6 characters only")
        .required("required"),

      last: Yup.string()
        .min(3, "must have 3 characters")
        .max(6, "max of 6 characters only")
        .required("required"),
      mobile: Yup.number()

        .required("required"),
      city: Yup.string()
        .min(3, "must have 3 characters")
        .max(6, "max of 6 characters only")
        .required("required"),
    }),
  });

  return (
    <Container className="my-5 w-75">
      <Form onSubmit={f.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First</Form.Label>
          <Form.Control
            type="text"
            placeholder="first"
            name="first"
            value={f.values.first}
            onChange={f.handleChange}
          />
          {f.errors.first && f.touched.first ? <div>{f.errors.first}</div> : ""}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last</Form.Label>
          <Form.Control
            type="text"
            placeholder="last"
            name="last"
            value={f.values.last}
            onChange={f.handleChange}
          />
          {f.errors.last && f.touched.last ? <div>{f.errors.last}</div> : ""}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="number"
            placeholder="Mobile"
            name="mobile"
            value={f.values.mobile}
            onChange={f.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="city"
            name="city"
            value={f.values.city}
            onChange={f.handleChange}
          />
          {f.errors.city && f.touched.city ? <div>{f.errors.city}</div> : ""}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <button variant="primary" type="submit" onClick={logout}>
        logout
        
        </button>
      </Form>
    </Container>
  );
}

export default Home;
