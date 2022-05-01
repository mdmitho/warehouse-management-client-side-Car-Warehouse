import React, { useEffect, useRef } from 'react';
import login from '../../img/login.png'
import googleLogo from '../../img/google logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../Firebase/Firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';



const Login = () => {
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef('')
  const passwordRef = useRef("");
  const navigate = useNavigate()
const location = useLocation();
let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(
    auth);

    const handleLogin = event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password);
      signInWithEmailAndPassword(email, password);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }

    if (user || googleUser) {
      navigate(from, { replace: true });
      toast.success("Successfully Login!");
    }
  
    const resetPassword =async ()=>{
      const email = emailRef.current.value
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('please enter your email')
    }
    }
  
  
    useEffect(() => {
      if (error) {
        switch (error?.code) {
          case "auth/invalid-email":
            toast.error("Invalid email provided, please provide a valid email");
            break;

          case "auth/invalid-password":
            toast.error("Wrong password. Intruder!!");
            break;
          default:
            toast.error("something went wrong");
        }
      }
    }, [error]);

    return (
      <div className="container mx-auto">
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800 ">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={login} alt="Sample image" />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 shadow-2xl p-10">
                <form onSubmit={handleLogin}>
                  {/* <!-- Email input --> */}
                  <div class="mb-6 ">
                    <input
                      type="email"
                      ref={emailRef}
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="mb-6">
                    <input
                      ref={passwordRef}
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" onClick={resetPassword} class="text-red-600">
                      Forgot password?
                    </a>
                  </div>

                  <div class="text-center lg:text-left">
                    <button
                      type="submit"
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign in
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <Link
                        to="/registration"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-4"
                      >
                        Registration
                      </Link>
                    </p>
                  </div>

                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>

                  <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-lg mb-0 mr-4">Sign in with</p>

                    <button
                      onClick={() => signInWithGoogle()}
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      {/* <!-- Linkedin --> */}
                      <img src={googleLogo} alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Login;