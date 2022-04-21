import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Login.css";

const Login = ({ values, setValues, handleClose, handleShow, show }) => {
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  function handleSubmit(event) {
    event.preventDefault();
    handleClose();
  }

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <div className="heading">
        <div className="heading-box">
          <Button
            // className="text-center"
            variant="primary"
            onClick={handleShow}
          >
            Please Login for searching awesome food
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  autoFocus
                  onChange={handleChange}
                  value={values.name}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                  onChange={handleChange}
                  value={values.name}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="password"
                  autoFocus
                  onChange={handleChange}
                  value={values.password}
                />
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
              </Form.Group>
            </Form> */}

              <main>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">
                    Name
                    <input
                      autoComplete="off"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      onChange={handleChange}
                      value={values.name}
                    />
                  </label>
                  <br />
                  <label htmlFor="email">
                    Email
                    <input
                      placeholder="email"
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                  </label>
                  <br />
                  <label htmlFor="PassWord">
                    PassWord
                    <input
                      type="text"
                      placeholder="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                    />
                  </label>
                  <br />
                  <label htmlFor="confirmPassword">
                    Confirm Password
                    <input
                      type="text"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </main>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
              <Button variant="primary" onClick={handleSubmit}>
                submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Login;
