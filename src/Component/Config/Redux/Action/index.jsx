import { createUserWithEmailAndPassword } from "firebase/auth"

export const actionUserName = () => (dispatch) => {
    setTimeout(()=>{
        return dispatch({ type: 'CHANGE_USER', value: 'Dio Siregar' })

    }, 2000)
}



export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
    return(
        createUserWithEmailAndPassword(data.auth, data.email, data.password)
        .then((userCredential) => {
            console.log('sukses: ', userCredential)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
        .catch((error) => {
            // Handle sign-up errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
    )
}