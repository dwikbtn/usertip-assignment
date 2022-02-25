import React, { useState } from "react";
import logoImg from "../../assets/icons/Logo.png";

const SignUp = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [email, setEmail] = useState();

  const signUpHandler = (e) => {
    e.preventDefault();
    if (password === rePassword && userName && password && email) {
      props.signUpHandler(email, userName, password);
      props.logStatus();
    } else {
      console.log("Make sure to fill all the form");
    }
  };

  return (
    <div className="flex w-screen h-screen ">
      <form className="mx-auto my-[143px] flex justify-start flex-col w-95  ">
        <img className="w-12 h-12 mb-8" src={logoImg} alt="logo" />
        <h2 className="login-header">Sign Up</h2>
        <p className="login-text font-semibold text-black mb-6">
          Start your journey today to become the best Pokemon Trainer ever lived
        </p>
        <div className="w-full bg-neutral-300 h-[2px] rounded-sm mb-8"></div>
        <label
          htmlFor="userName"
          className="h-6 login-text  text-black font-semibold mb-3"
        >
          Username
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="userName"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <label
          htmlFor="email"
          className="h-6 login-text  text-black font-semibold mb-3"
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <label
          htmlFor="password"
          className="h-6 login-text font-semibold  text-black mb-3"
        >
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <label
          htmlFor="repassword"
          className="h-6 login-text font-semibold  text-black mb-3"
        >
          Repeat Password
        </label>
        <input
          onChange={(e) => setRePassword(e.target.value)}
          type="password"
          name="repassword"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <button
          onClick={signUpHandler}
          className="bg-primary rounded-xl h-12 text-neutral-100 p-3 login-text font-bold mb-8 "
        >
          Sign Up
        </button>
        <p className="login-text font-semibold text-neutral-400 ">
          Have an account?
          <span
            className="text-black hover:cursor-pointer hover:underline"
            onClick={() => props.status()}
          >
            Login.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
