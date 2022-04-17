import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="col-md-6 col-lg-4 mx-auto mt-4 shadow p-4 rounded">
        <h1 className="text-center fw-bold text-primary">Pleas Login</h1>
      <Form className="">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
            Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
