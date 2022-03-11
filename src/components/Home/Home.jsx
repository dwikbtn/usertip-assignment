import React, { useContext } from "react";
import totCatch from "../../assets/icons/totCatch.png";
import attempts from "../../assets/icons/attempt.png";
import coin from "../../assets/icons/coin.png";
import { UserContext } from "../../UserContext";

const Home = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <div>
      <h3 className="header mt-10 ml-10 mb-6 ">Welcome, {userInfo.userName}</h3>
      <div className="prodOverview mt-4 mx-10">
        <div className="flex justify-between items-center p-6">
          <p className="text text-neutral-700">Start your Adventure Now!</p>
          <button className="bg-primary h-12 py-3 px-5 rounded-xl text-white hover-link">
            Catch A pokemon
          </button>
        </div>
      </div>
      <div className="prodOverview mt-4 mx-10 p-6 rounded">
        <div className="mt-[30] ml-6 flex items-center mb-9">
          <div className="bg-secondary w-4 h-8 mr-4"></div>
          <span className="text text-neutral-700">Overview</span>
        </div>
        {/* card start here */}
        <div className="flex ml-6">
          <div className="home-card bg-card-1 p-8 ml-3">
            <img src={totCatch} alt="total catch" className="w-12 h-12 mb-4" />
            <p className="subText text-neutral-500 mb-1">Pokemon Catched</p>
            <h2 className="count">{userInfo.catched}</h2>
          </div>

          <div className="home-card bg-card-2 p-8 ml-3">
            <img src={attempts} alt="total catch" className="w-12 h-12 mb-4" />
            <p className="subText text-neutral-500 mb-1">Catch Attempts</p>
            <h2 className="count">{userInfo.attempts}</h2>
          </div>
          <div className="home-card bg-card-3 p-8 ml-3">
            <img src={coin} alt="total catch" className="w-12 h-12 mb-4" />
            <p className="subText text-neutral-500 mb-1">Coins</p>
            <h2 className="count">{userInfo.coins}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
