import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login-img"></div>
      <div className="login-form flex justify-center items-center">
        <div className="form">
          <h1 className="font-bold text-2xl">Hello! Welcome back.</h1>
          <p>Enter your email and password you registered with below.</p>
          <form action="" className="mt-8">
            <div>
              <label htmlFor="email" className="block text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="ss"
                className="w-[100%] p-2 border-gray-50"
              />
            </div>
            <div className="pt-2">
              <label htmlFor="pass" className="block text-sm font-bold">
                Password
              </label>
              <input
                type="password"
                id="pass"
                className="w-[100%] p-2"
                placeholder="sasass "
              />
            </div>
            <div className="check flex items-center justify-between pt-5">
              <div className="flex items-center gap-1 ">
                <input id="box" type="checkbox" className="" />
                <label htmlFor="box" className=" text-sm">
                  Remember me
                </label>
              </div>

              <Link className="text-[var(--red)] text-sm">
                Forget password?
              </Link>
            </div>
            <button className="mt-4 w-[100%] bg-[var(--main)] text-[var(--white)] font-bold p-2">
              Continue learning
            </button>
            <div className="google">
              <div className="line">
                <hr />
                <span>Or sign up with</span>
                <hr />
              </div>
              <button>Signup with Google</button>
              <p>
                Already have an account? <a href="">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
