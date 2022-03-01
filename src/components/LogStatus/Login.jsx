import React, { useState } from "react";
import logoImg from "../../assets/icons/Logo.png";
import Input from "../UI/Input";

const Login = (props) => {
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });
  const [errorMsg, setErrorMsg] = useState({
    userValidation: false,
    passValidation: false,
  });
  const { userName, password } = inputValue;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const error = {
    userName: "user name is invalid",
    password: "password is invalid",
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const userData = props.db.find((user) => user.userName === userName);
    if (!userData) {
      setErrorMsg((prev) => ({ ...prev, userValidation: true }));
      return 0;
    }
    if (userName === userData.userName && password === userData.password) {
      props.logStatus(userData);
    } else {
      setErrorMsg((prev) => ({ ...prev, passValidation: true }));
    }
  };

  return (
    <div className="flex w-screen h-screen ">
      <form className="m-auto flex justify-start flex-col w-95  ">
        <img className="w-12 h-12 mb-8" src={logoImg} alt="logo" />
        <h2 className="login-header">Login</h2>
        <div className="w-full bg-neutral-300 h-[2px] rounded-sm mb-8"></div>
        <Input
          label={"Username"}
          type={"text"}
          inputName={"userName"}
          className={"mb-3"}
          onChange={handleInputChange}
          value={userName}
          valid={errorMsg.userValidation}
          errorMsg={error.userName}
        />
        <Input
          label={"password"}
          type={"password"}
          inputName={"password"}
          className={"mb-3"}
          onChange={handleInputChange}
          value={password}
          valid={errorMsg.passValidation}
          errorMsg={error.password}
        />
        <button
          className="bg-primary rounded-xl h-12 text-neutral-100 p-3 login-text font-bold mb-8  hover:cursor-pointer hover:underline"
          onClick={loginHandler}
        >
          Sign in
        </button>
        <p className="login-text font-semibold text-neutral-400 ">
          Don’t have an account?
          <span
            className="text-black hover-link"
            onClick={() => props.status()}
          >
            Sign up.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
