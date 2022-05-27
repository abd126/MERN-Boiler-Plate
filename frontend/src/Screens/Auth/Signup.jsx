import React, { useState } from 'react'
import {useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import signupAction from '../../Store/actions/AuthActions/signupActions'

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")

    
    const {users ,setLoading , setError} = useSelector((state)=> state.authReducer)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signUpHandler = (e) => {
        e.preventDefault();

        const userObj = {
            userName,
            email,
            password,
            contact
        }
        dispatch(signupAction(userObj))
        navigate("/")


    }

    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={signUpHandler}>
                <input type="text"
                    placeholder='User Name'
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }} />

                <br />
                <br />

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

                <input type="text"
                    placeholder='Contach No'
                    value={contact}
                    onChange={(e) => { setContact(e.target.value) }} />

                <br />
                <br />
                {
                    setLoading ? (
                        <button>
                        ...Loading
                    </button>
                    ) :
                
                <button>
                    Sign Up
                </button>
            }
            </form>
        </div>
    )
}

export default Signup
