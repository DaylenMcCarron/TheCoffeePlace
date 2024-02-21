import { useState } from "react"
import SignInForm from "./Signin"
import SignUpForm from "./Signup"
import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth"
import { auth } from "./firebase"

const LoginForm = () => {

    const [isEmailSignin,setIsEmailSignin] = useState(true)

    const provider = new GoogleAuthProvider();
    const googleSignin = () => {
        signInWithRedirect(auth, provider)
        getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


    return (<>
            <img src="./assets/The Coffee Place final.png" alt="" className=" w-[50%] mx-auto -my-10" />
        <div className="bg-glass h-fit py-4 shadow-md">
            <div className="bg-white text-blue-500 font-semibold h-12 mx-10 rounded-lg flex content-center mb-[2vh] shadow-md "
            onClick={()=>googleSignin()}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" className="w-8 float-left m-2" alt="" />
                <h1 className="w-full -ml-10 my-auto text-center">Sign in with Google</h1>
            </div>
            <h1 className="w-full text-center">- or -</h1>
            <div className="w-full pt-[3vh] p-2 text-white">
                <button className={`w-[50%] p-2 bg-glass ${isEmailSignin ?  " bg-coffee-6 shadow-lg border-[1px] font-bold" : null} `} onClick={()=>setIsEmailSignin(true)}>Login</button>
                <button className={`w-[50%] p-2 bg-glass ${!isEmailSignin ? " bg-coffee-6 shadow-lg border-[1px] font-bold" : null} `} onClick={()=>setIsEmailSignin(false)}>Sign Up</button>
            </div>
            {isEmailSignin ?
            <SignInForm />
            :
            <SignUpForm />
            }
        </div></>
    )
}

export default LoginForm