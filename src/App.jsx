import { useState } from "react";

import Catch from "./components/Catch/Catch";
import Home from "./components/Home/Home";
import LogStatus from "./components/LogStatus/LogStatus";
import SideBar from "./components/Navbar/Sidebar";
import Topbar from "./components/Navbar/Topbar";

// json
import db from "./database/db.json";
import { UserContext } from "./UserContext";

function App() {
  const [userInfo, setUserInfo] = useState(db);
  const [logStatus, setLogStatus] = useState(false);
  const [currentView, setCurrrentView] = useState("home");

  // create Context

  const loginHandler = (loggedUser) => {
    setUserInfo(loggedUser);
    setLogStatus((prevState) => {
      return !prevState;
    });
  };

  console.log(userInfo);
  const signUpHandler = (email, userName, password) => {
    const newUser = {
      email,
      userName,
      password,
      coins: 500,
      attempts: 0,
      catched: 0,
      pokeB: 5,
      greatB: 2,
      masterB: 1,
      pokemonList: [],
    };

    setUserInfo((prevState) => {
      return [...prevState, newUser];
    });
  };

  const navbarHandler = (position) => {
    setCurrrentView(position);
  };

  return (
    <>
      {!logStatus ? (
        <LogStatus
          logStatus={loginHandler}
          db={userInfo}
          signUpHandler={signUpHandler}
        />
      ) : (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
          <div className="layout-grid ">
            <SideBar
              navbarHandler={navbarHandler}
              logOutHandler={loginHandler}
            />
            <Topbar logOutHandler={loginHandler} />
            <div className="w-full  h-screen  bg-neutral-200">
              {currentView === "home" && <Home />}
              {currentView === "catch" && <Catch />}
            </div>
          </div>
        </UserContext.Provider>
      )}
    </>
  );
}

export default App;
