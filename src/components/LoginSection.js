import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useMutation } from '@tanstack/react-query';
import { login } from '../util/http';
import { useRef ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSection() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
    }, [])

const email = useRef();
const password = useRef();
const {mutate,  isLoading ,data } = useMutation({
  mutationFn:login,
  onSuccess: () => {
    alert('login success');
  },
  onError: () => {
    alert('login failed');
  },
});

function handlesubmit(e){
  e.preventDefault();

mutate({
  email:email.current.value,
  password:password.current.value
});
localStorage.setItem('token',data?.token);
navigate('/');

}

  
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Villa</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' ref={email} size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' ref={password} size="lg"/>

              <MDBBtn className="mb-4 px-5" style={{backgroundColor:"orange"}} size='lg' onClick={handlesubmit}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default LoginSection;