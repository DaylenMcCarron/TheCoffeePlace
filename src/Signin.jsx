import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Sign-in successful, redirect or handle as needed
      } catch (error) {
        alert(error.message); // Handle errors properly
      }
    };
  
    return (
        <div className=" h-fit ">
        <form onSubmit={handleSubmit} className="p-2">
        <label htmlFor="email" className="m-2">Email:</label>
        <input
          className=" w-full rounded-md p-2 border-[1px] border-coffee-6"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br />
        <label htmlFor="password" className="m-2">Password:</label>
        <input
            className=" w-full rounded-md p-2 border-[1px] border-coffee-6"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> <br />
        <button type="submit" className="bg-coffee-5 w-full mt-3 text-white p-1">Sign In</button>
      </form>
      </div>
    );
  };
export default SignInForm  