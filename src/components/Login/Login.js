import React, { useState } from "react";
import {
  Button,
  Form,
  Toast,
  ToastBody,
  ToastContainer,
} from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const [toast, setToast] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async (event) => {
    const email = event.current.emeil.value;
    if (email) {
      await sendPasswordResetEmail(email);
      setToast("Sent email");
    } else {
      setToast("please enter your email address");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 mx-auto mt-4 shadow p-4 rounded">
      <h1 className="text-center fw-bold text-primary">Pleas Login</h1>
      <Form className="" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="mt-4">
        New to Tutor Pro?{" "}
        <Link
          to={"/signup"}
          className="text-decoration-none text-danger"
          onClick={navigateRegister}
        >
          Please Sign Up
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </p>
      <ToastContainer>
        <ToastBody>{toast}</ToastBody>
      </ToastContainer>
    </div>
  );
};

export default Login;
