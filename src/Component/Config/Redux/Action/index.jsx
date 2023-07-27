import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'Dio Siregar' })

    }, 2000)
}



export const registerUserAPI = (data) => (dispatch) => {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    return (
        createUserWithEmailAndPassword(data.auth, data.email, data.password)
            .then((userCredential) => {
                console.log('sukses: ', userCredential)
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
            .catch((error) => {
                // Handle sign-up errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
    )
}
export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })

        signInWithEmailAndPassword(data.auth, data.email, data.password)
            .then((userCredential) => {
                console.log('sukses: ', userCredential)
                const dataUser = {
                    email: userCredential.user.email,
                    uID: userCredential.user.uid,
                    emailVerified: userCredential.user.emailVerified
                }
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_LOGIN', value: true })
                dispatch({ type: 'CHANGE_USER', value: dataUser })
                resolve(true)
            })
            .catch((error) => {
                // Handle sign-up errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_LOGIN', value: false })
                reject(false)
            })

    })
}