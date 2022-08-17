import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../hook/useAuth";
import {useNavigate} from 'react-router-dom';

export const Login = () => {

  const elEmail = useRef();
  const elPassword = useRef();
  const navigate = useNavigate();
  const {token, setToken} = useAuth();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    // fetch('https://reqres.in/api/login',{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json",
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body:JSON.stringify({
    //     "email": elEmail.current.value,
    //     "password": elPassword.current.value,
    //   })
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))

    axios.post('https://reqres.in/api/login', {
      "email": elEmail.current.value,
      "password": elPassword.current.value,
    })
    .then(function (response) {
      if(response.data) {
        setToken(response.data)
        navigate("/")
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  return (
    <>
      <form onSubmit={handleFormSubmit} className="w-50 mx-auto bg-light p-5 shadow">
      <h1>Login</h1>
        <div className="mb-3">
          <input ref={elEmail} type="email" className="form-control" placeholder="Email..." />
        </div>

        <div className="mb-3">
          <input ref={elPassword} type="password" className="form-control" placeholder="Password..." />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};