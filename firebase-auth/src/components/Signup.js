import React, { useRef } from 'react'
import { Form, Button, Card } from "react-bootstrap"

function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className = "text-center mb-4">
                        Sign Up
                    </h2>

                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type = "email" ref = { emailRef } required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Passowrd</Form.Label>
                            <Form.Control type = "password" ref = { passwordRef } required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Passowrd</Form.Label>
                            <Form.Control type = "password" ref = { passwordConfirmRef } required />
                        </Form.Group>
                        <br /> 
                        <Button className = "w-100" type = "submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>   

            <div className = "w-100 text-center mt-3">
                Already have an account? Log In
            </div>    
        </>
    )
}

export default Signup

