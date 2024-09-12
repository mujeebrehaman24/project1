import React,{useState, useContext} from 'react';
import axios from 'axios';
import {store} from './App';
import { Navigate } from 'react-router-dom';
import pic from './assests/BBC.jpg'
import logo from './assests/logo.png'


const Login = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState ({
        email: '',
        password: ''
    })

    const changeHandler = e => {
        setData ({...data, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', data).then(
            res => setToken(res.data.token)
        )
    }

    if(token) {
        return <Navigate to = '/home' />
    }


  return (
    <div className="login">
      <div className="container cont">
        <form onSubmit={submitHandler} className="login-form">
          <div >
            <img src={logo} alt="" />
            <h4>Welcome Back...!</h4>
          </div>
          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email"  onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
          </div>

          <div className='mb-0'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Password" required />
          </div>
          <button type="submit" className="btn  btn-sm p-2 bt">Log in</button>
        </form>
        <div className="container cont-img ">
          <img src={pic} alt="Astro" />
        </div>
      </div>
    </div>
  );
}
  export default Login