import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import loginAction from '../../Store/actions/AuthActions/loginAction'



const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { users, setLoading, setError, currentUser } = useSelector((state) => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault();

    const userObj = {
      
      email,
      password,
    }
    
    dispatch(loginAction(userObj))
    navigate("/dashboard")


  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginHandler}>
        <input type="email"
          placeholder='User Email'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <br />
        <br />

        <input type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }} />

        <br />
        <br />
        {
          setLoading ? (
            <button>
              ...Loading
            </button>
          ) :

            <button>
              Login
            </button>
        }
      </form>
    </div>
  )
}


export default Login
