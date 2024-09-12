import React,{useState} from 'react';
import axios from 'axios'
import pic from './assests/BBC.jpg'
import logo from './assests/logo.png'


const Register = ()=>{
    const [data, setData] = useState({
        name: '',
        DOB: '',
        sunshine: '',
        location: '',
        gender:'',
        email:'',
        password: '',
        confirmpassword: ''
    })

    const changeHandler = e=> {
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const submitHandler = e=> {
        e.preventDefault();
        axios.post('http://localhost:5000/register', data).then(
            res => {alert(res.data);setData({
                name:'',
                DOB: '',
                sunshine: '',
                location: '',
                gender: '',
                email:'',
                password:'',
                confirmpassword:''
        })}
    )
}


  return (
    <div className="login">
      <div className="container cont">
        <form onSubmit={submitHandler} className="login-form">
          <div >
            <img src={logo} alt="" />
            <h4>Welcome Back...!</h4>
          </div>
          <div >
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Name" required />
          </div>
          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
            <input type="date" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Date of Birth" required />
          </div>
          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Sunshine</label>
            {/* <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" required /> */}
            <select class="form-select" onChange={changeHandler} aria-label="Default select example" required>
              <option value="" disabled>Select your Sun Sign</option>
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option value="Gemini">Gemini</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Sagittarius">Sagittarius</option>
              <option value="Capricorn">Capricorn</option>
              <option value="Aquarius">Aquarius</option>
              <option value="Pisces">Pisces</option>
            </select>
          </div>
          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
            <select class="form-select" onChange={changeHandler} aria-label="Default select example" required>
              <option value="" disabled>Select a city</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Surat">Surat</option>
            </select>
          </div>

          <div className='mb-0'>
            <label htmlFor="exampleFormControlInput1" className="form-label">gender</label>
            <select class="form-select" onChange={changeHandler} aria-label="Default select example" required>
                <option value="" disabled>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">other</option>
            </select>
          </div>
          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
          </div>

          <div className='mb-0'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Password" required />
          </div>

          <div className="mb-0">
            <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
            <input type="password" onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Confirmpassword" required />
          </div>
          <button type="submit" className="btn  btn-sm p-2 bt">submit</button>
        </form>
        <div className="container cont-img ">
          <img src={pic} alt="Astro" />
        </div>
      </div>
    </div>
  );
}

export default Register