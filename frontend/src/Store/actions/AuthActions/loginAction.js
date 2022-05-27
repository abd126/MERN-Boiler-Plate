import axios from "axios";
import BASE_URI from "../../../Config/baseURI";
import ActionTypes from "../../constant";


const loginAction = (loginUser) =>{
    return (dispatch) =>{
        dispatch({
            type :ActionTypes.SET_LOADING
        })
        axios
        .post(`${BASE_URI}login`, loginUser)
        .then((res)=>{
            if(res.data.error){
                console.log(res.data.error)
                dispatch({
                    type:ActionTypes.SET_ERROR,
                    payload: res.data.error
                })
            }
            else{
                localStorage.setItem("currentUser" , JSON.stringify(res.data.data))
                dispatch({
                    type:ActionTypes.USER_LOGIN,
                    payload : res.data.data
                })
            }
        })
        .catch((err)=>{
            dispatch({
                type:ActionTypes.SET_ERROR,
                payload:err.data
            })
        })
    }
}


export default loginAction