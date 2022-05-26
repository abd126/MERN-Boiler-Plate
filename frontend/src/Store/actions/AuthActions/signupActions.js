import axios from "axios";
import BASE_URI from "../../../Config/baseURI";
import ActionTypes from "../../constant";


const signupAction = (userData) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.SET_LOADING
        })

        // Set User In Database
        axios
            .post(`${BASE_URI}signup`, userData)
            .then((res) => {
                const message = res.data.message
                // console.log(message)
                if (message === "email address is already exist") {
                    dispatch({
                        type: ActionTypes.SET_ERROR,
                        payload: message
                    })
                }
                else if (message === "Required field are missing") {
                    dispatch({
                        type: ActionTypes.SET_ERROR,
                        payload: message
                    })
                }
                else{
                    axios.get(`${BASE_URI}alluser`)
                    .then((alluser)=>{
                        const users = alluser.data
                        console.log(users)
                        dispatch({
                            type : ActionTypes.ADD_USER,
                            payload : users
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }


}


export default signupAction