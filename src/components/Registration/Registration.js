import React, { useEffect, useState } from 'react';
import login from '../../img/login.png'
import googleLogo from '../../img/google logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth, {
    sendEmailVerification: true,
  });
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });


    const handleEmailChange =(event)=>{
      const emailCheck = /\S+@\S+\.\S+/;
      const validEmail = emailCheck.test(event.target.value);
      if (validEmail) {
        setUserInfo({ ...userInfo, email: event.target.value });
        setErrors({ ...errors, email: "" });
      } else {
        setErrors({ ...errors, email: "Invalid email" });
        setUserInfo({ ...userInfo, email: "" });
      }
    }

    const handlePasswordChange =(event)=>{
      const passwordCheck = /.{6,}/;
      const validPassword = passwordCheck.test(event.target.value);
      if (validPassword) {
        setUserInfo({ ...userInfo, password: event.target.value });
        setErrors({ ...errors, password: "" });
      } else {
        setErrors({ ...errors, password: "Minimum 6 characters!" });
        setUserInfo({ ...userInfo, password: "" });
      }
    }

    const handleConfirmPassword = (event) => {
      if (event.target.value === userInfo.password) {
        setUserInfo({ ...userInfo, confirmPass: event.target.value });
        setErrors({ ...errors, password: "" });
      } else {
        setErrors({ ...errors, password: "Password's don't match" });
        setUserInfo({ ...userInfo, confirmPass: "" });
      }
    };
    const handleLogin = (event) => {
      event.preventDefault();
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    useEffect(() => {
      const error = hookError;
      if (error) {
        switch (error?.code) {
          case "auth/invalid-email":
            toast.error("Invalid email, please provide a valid email");
            break;

          case "auth/invalid-password":
            toast.error("Wrong password!!");
            break;
          default:
            error("something went wrong!!");
        }
      }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
      if (user || googleUser) {
        navigate(from);
      }
    }, [user]);

    return (
      <div className="container mx-auto mt-5 mb-10 ">
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800 ">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 ">
                <img src={login} alt="Sample image" />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 shadow-2xl p-10 ">
                <form onSubmit={handleLogin}>
                  {/* <!-- Email input --> */}
                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="email"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  peer 
                      required:border-red-500
                      "
                      id="exampleFormControlInput2"
                      placeholder="Your Email"
                      onChange={handleEmailChange}
                      required
                    />
                    {/* <p class="mt-2  peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid email address.
                    </p> */}
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="mb-6">
                    <input
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      required
                    />
                    {errors?.password && <p className="text-danger mt-2">{errors.password}</p>}
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Conform Password"
                      onChange={handleConfirmPassword}
                      required
                    />
                    {errors?.password && <p className="text-danger mt-2">{errors.password}</p>}
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
                  </div>

                  <div class="text-center lg:text-left">
                    <button
                      type="submit"
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Registration
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      You have an account?
                      <Link
                        to="/login"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-4"
                      >
                        Login
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

export default Registration;