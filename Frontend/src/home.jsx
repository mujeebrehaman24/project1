import React, {useState, useContext, useEffect} from 'react';
import {store} from './App';
import { Navigate } from 'react-router';
import axios from 'axios';

import logo from './assests/logo.png'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa6";
import Shooping from './assests/resize.png'
import { TbMoodEdit } from "react-icons/tb";
import tr1 from './assests/tr_1.jpg'
import tr2 from './assests/tr_2.png'
import tr3 from './assests/tr_3.jpg'
import tr4 from './assests/tr_4.jpg'


const Home = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] = useState(null);

    useEffect (() => {
        axios.get('http://localhost:5000/home', {
            headers: {
                'x-token': token
            }
        }). then (res => setData (res.data)) .catch((err) => console.log(err))
    }, [])

    if(!token) {
        return <Navigate to="/login" replace={true} />;
    }

  return (

    <div className='Home'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src={logo} alt="Shopping" width="60px" height="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><FaCamera /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><TiWeatherPartlySunny /> 22 C</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#"><CiLocationOn /> Bengaluru
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#"><FaUserTie /> Mahesh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='continer position-relative t'>
        <img src={Shooping} alt="Shooping pic"  className="img-fluid w-100" />
        <h2  className='position-absolute top-50 ms-5 start-0 translate-middle-y text-white  text-breakpoint w-50 ' >Hii , How is Your Day..!! <br /> What do you like to wear Today..!!</h2>
      </div>
      <div class="container-fluid text-center mt-3 ">
        <div class="row row-cols-auto g-2 ms-3 ">
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Mood 😉
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Happy 😊</a></li>
              <li><a class="dropdown-item" href="#">Sad 😢</a></li>
              <li><a class="dropdown-item" href="#">Angry 😡</a></li>
              <li><a class="dropdown-item" href="#">Love 😍</a></li>
            </ul>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Vibe 😇
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Party 🤩</a></li>
              <li><a class="dropdown-item" href="#">Office 💼</a></li>
              <li><a class="dropdown-item" href="#">Club 🎉</a></li>
              <li><a class="dropdown-item" href="#">Festival 🎄</a></li>
            </ul>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Clothing Type
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Cotton 🌿</a></li>
              <li><a class="dropdown-item" href="#">Silk 🦋</a></li>
              <li><a class="dropdown-item" href="#">Polyester 🧵</a></li>
              <li><a class="dropdown-item" href="#">Nylon 🧶</a></li>
              <li><a class="dropdown-item" href="#">Wool 🐑</a></li>
            </ul>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Lucky Colors
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Red 🔴</a></li>
              <li><a class="dropdown-item" href="#">Blue 🔵</a></li>
              <li><a class="dropdown-item" href="#">Green 🟢</a></li>
              <li><a class="dropdown-item" href="#">Yellow 🟡</a></li>
            </ul>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Your Favorite Color
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Red 🔴</a></li>
              <li><a class="dropdown-item" href="#">Blue 🔵</a></li>
              <li><a class="dropdown-item" href="#">Green 🟢</a></li>
              <li><a class="dropdown-item" href="#">Yellow 🟡</a></li>
            </ul>
          </div>
          <div class="col">
            <button type="button" class="btn btn-secondary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Casual 🧢</a></li>
              <li><a class="dropdown-item" href="#">Formal 👔</a></li>
              <li><a class="dropdown-item" href="#">Sportswear 🏃</a></li>
              <li><a class="dropdown-item" href="#">Traditional 🎎</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-group  mt-3">
        <div class="card ms-1 me-1">
          <img src={tr1} className="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title ">Comfy Men Kurta Sets</h5>
            <p class="card-text">Fancy Men Kurta Sets/Men Kurta Set/kurta with pajama for mens/Mens Straigth Kurta Pyjama Combo Set In 100% Cotton/Kurta Pyjama For Men/cotton kurta pajama for men/Stylish Men Kurta Set.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 days ago</small></p>
          </div>
        </div>
        <div class="card ms-1 me-1">
          <img src={tr3} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title ">Modern Men Sherwanis</h5>
            <p class="card-text">Modern Sherwani for Men/Designer Men Sherwani Sets/Stylish Men Sherwanis/Sherwani with Churidar for Men/Men's Wedding Sherwani/Elegant Sherwani for Men.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 days ago</small></p>
          </div>
        </div>
        <div class="card ms-1 me-1 ">
          <img src={tr2} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Ramraj Cotton Mens Spread Collar Solid Pure Cotton White Full Sleeve Shirt and Dhoti</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card ms-1 me-1">
          <img src={tr4} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title ">Elegant Men Sherwanis</h5>
            <p class="card-text">Classic Men Sherwanis/Sophisticated Sherwani for Men/Regal Men Sherwani Collection/Timeless Sherwani Designs for Men/Refined Men Sherwani Outfits/Graceful Sherwanis for Men/Premium Men Sherwani Attire.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 days ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
  export default Home