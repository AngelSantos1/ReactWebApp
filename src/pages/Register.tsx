//import { useState } from "react";
//import { useForm } from "../components/useForm";
//import { Component} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
    // const initialState = {
    //     firstName: "",
    //     lastName: "",
    //     phone: "",
    //     address: "",
    //     email: "",
    //     username: "",
    //     password: "",
    // };

    // const { onChange, onSubmit, values } = useForm(
    //     //loginUserCallback,
    //     initialState,
    // );

    // // async function loginUserCallback() {
    // //     //values database
    // // }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Enter address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
    
}

export default Register;