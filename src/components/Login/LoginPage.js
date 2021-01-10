import React, { Component } from "react";
import axios from 'axios'

import {Control, LocalForm, Errors } from 'react-redux-form';
//import { Link } from 'react-router-dom';
import {Button,  Card,  CardBody,  CardGroup,  Col,  Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
var regularExpression = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,}$/;
const passwordValidator = (val) => regularExpression.test(val)
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)


class LoginPage extends Component {
    constructor(props){
        super(props)
    }



  handleSubmit = (values) => {
      // alert(JSON.stringify(values))

      console.log(values)

      localStorage.setItem('tokn', JSON.stringify(values))
      localStorage.setItem('usr', JSON.stringify(values))


      window.location.href = '/'

  }


  render() {
    return (
      <div className="app login-page flex-row align-items-center" style={{paddingTop:"50px"}}>
        <Container>
          <Row className="justify-content-center">
              <Col md="6">
              <CardGroup>
                <Card className="p-3" style={{border:"2px solid #51cbce"}}>
                  <CardBody>
                      <h3>Login</h3><hr style={{border:"1px solid #51cbce"}}/>
                      <p className="">Please Sign In to your account:</p>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.text model=".loginemail"
                                        id="loginemail"
                                        name="loginemail"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }} 
                                    />
                                    <Errors 
                                        className="text-danger"
                                        show="touched"
                                        model=".loginemail"
                                        messages={{
                                            required: 'This is a Required Field! ',
                                            validEmail: 'Invalid Email'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Control.password model=".loginpassword"
                                        id="loginpassword"
                                        name="loginpassword"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                          passwordValidator
                                        }} 
                                    />
                                    <Errors 
                                        className="text-danger"
                                        show="touched"
                                        model=".loginpassword"
                                        messages={{
                                            passwordValidator: 'Password should be more than 8 characters and it should contain one upper case, onelower case, one number and 1 special character.'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6}}>
                                    <Button type="submit" color="outline-primary" block>
                                        Submit
                                    </Button>
                                </Col>
                                <Col md={{size: 6}} className="pt-2">
                                  <p> Not Registered? <Link to='/register'>Click here..</Link></p>
                                </Col>
                                  
                            </Row>
                        </LocalForm>
                     
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
             
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;