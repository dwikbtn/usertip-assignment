import React, { useState, useEffect, useContext } from "react";

import pBall from "../../assets/icons/pokeball.svg";
import gBall from "../../assets/icons/greatball.svg";
import mBall from "../../assets/icons/masterball.svg";
import looking from "../../assets/icons/looking.svg";

import pokeball from "../../assets/icons/pokeball.png";
import placeholderImg from "../../assets/icons/placeholder-1.png";

import { UserContext } from "../../UserContext";

const Catch = () => {
  const [findPokemon, setFind] = useState(false);
  const [viewState, setViewState] = useState("pickPokeBallView");
  const [currentPokemon, setPokemon] = useState();

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * (898 - 1 + 1)) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [findPokemon]);

  const findPokemonHandler = () => {
    setFind(!findPokemon);
    console.log(currentPokemon);
  };

  const pickPokeBallView = (
    <div className="flex mt-8 justify-between">
      <div>
        <p className="text text-neutral-700 mb-6">Choose your pokeball</p>
        <div className="catch-border mb-1">
          <img src={pBall} alt="" className="w-5 h-5 mr-3" />
          <div className="text-left">
            <p className="font-medium text-xs text-neutral-400">
              {userInfo.pokeB} left
            </p>
            <p className="font-semibold text-base text-neutral-700">
              Poke Ball
            </p>
          </div>
        </div>
        <div className="catch-border mb-1">
          <img src={gBall} alt="" className="w-5 h-5 mr-3" />
          <div className="text-left">
            <p className="font-medium text-xs text-neutral-400">
              {userInfo.greatB} left
            </p>
            <p className="font-semibold text-base text-neutral-700">
              great Ball
            </p>
          </div>
        </div>
        <div className="catch-border">
          <img src={mBall} alt="" className="w-5 h-5 mr-3" />
          <div className="text-left">
            <p className="font-medium text-xs text-neutral-400">
              {userInfo.masterB} left
            </p>
            <p className="font-semibold text-base text-neutral-700">
              Master Ball
            </p>
          </div>
        </div>
        <button onClick={findPokemonHandler} className="catch-button mt-6">
          Catch A Pokemon
        </button>
      </div>
      <div className="w-1/2 h-full overflow-hidden rounded-[20px]">
        <img src={pokeball} alt="" className="w-full" />
      </div>
    </div>
  );

  const lookPkmView = (
    <div className="flex flex-col items-center text-center justify-center mt-16">
      <img src={looking} alt="" className="w-1/4" />
      <h2 className="header">Looking For A Pokeon</h2>
    </div>
  );

  const catchResultView = (
    <div className="flex flex-col justify-center items-center mt-9">
      <img src={placeholderImg} alt="" className="" />
      <h2 className="header ">Congratulations!</h2>
      <h3 className="font-normal">
        You Found a <span className="font-bold">Charizard</span>
      </h3>
      <div className="flex flex-col w-1/2 mt-4">
        <label
          htmlFor="nickname"
          className="h-6 login-text font-semibold  text-black mb-3"
        >
          Nick Name
        </label>
        <input
          type="email"
          name="nickname"
          className="bg-neutral-200 h-12 rounded-xl p-3 login-text font-semibold text-gray-200 mb-3"
        />
        <button
          type="submit"
          className="bg-primary rounded-xl h-12 text-neutral-100 p-3 login-text font-bold mb-8 "
        >
          Save
        </button>
      </div>
    </div>
  );

  return (
    <div className="prodOverview m-10 p-8">
      <h4 className="header">Catch A pokemon</h4>
      <p className="text text-neutral-400">
        It’s a wild west out there. Good luck, Pokemon Trainer
        IWannaBeTheVeryBest.
      </p>
      {viewState == "pickPokeBallView" && pickPokeBallView}
      {/* {lookPkmView}
      {catchResultView} */}
    </div>
  );
};

export default Catch;
