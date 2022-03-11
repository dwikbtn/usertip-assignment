import React from "react";

// icon
import logo from "../../assets/icons/Logo.svg";
import homeIc from "../../assets/icons/home.svg";
import catchIc from "../../assets/icons/catch.svg";
import inventoryIc from "./../../assets/icons/inventory.svg";
import profileIc from "../../assets/icons/profile.svg";
import storeIc from "../../assets/icons/store.svg";
import logOutIc from "../../assets/icons/logout.svg";

const SideBar = ({ navbarHandler, logOutHandler, activeView }) => {
  return (
    <nav className="w-full row-span-full bg-neutral-100 flex flex-col h-screen p-6 justify-between">
      <img src={logo} alt="logo" className="w-12 h-12 mb-12" />
      <ul className="self-start mb-auto w-full">
        <li
          className={`flex items-center h-12 p-3 group hover-sidebar ${
            activeView === "home" ? "active-sidebar" : ""
          } `}
          onClick={() => navbarHandler("home")}
        >
          <img src={homeIc} alt="home nav" className="w-6 h-6 inline mr-3  " />
          <span className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700">
            Home
          </span>
        </li>
        <li
          className={`flex items-center h-12 p-3 group hover-sidebar ${
            activeView === "catch" ? "active-sidebar" : ""
          } `}
          onClick={() => navbarHandler("catch")}
        >
          <img src={catchIc} alt="home nav" className="w-6 h-6 inline mr-3" />
          <span className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700">
            Catch a Pokemon
          </span>
        </li>
        <li className={`flex items-center h-12 p-3 group hover-sidebar `}>
          <img
            src={inventoryIc}
            alt="home nav"
            className="w-6 h-6 inline mr-3  "
          />
          <span className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700">
            My Pokemons
          </span>
        </li>
        <li className={`flex items-center h-12 p-3 group hover-sidebar `}>
          <img
            src={profileIc}
            alt="home nav"
            className="w-6 h-6 inline mr-3  "
          />
          <span className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700">
            My Profile
          </span>
        </li>
        <li className={`flex items-center h-12 p-3 group hover-sidebar `}>
          <img src={storeIc} alt="home nav" className="w-6 h-6 inline mr-3  " />
          <span className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700">
            Shops
          </span>
        </li>
      </ul>
      <div>
        <div className="h-[2px] w-full bg-neutral-200 rounded-sm mb-7"></div>
        <div className="flex items-center h-12 p-3 group hover-sidebar">
          <img
            src={logOutIc}
            alt="home nav"
            className="w-6 h-6 inline mr-3  "
          />
          <span
            className="font-semibold text-tiny leading-6 tracking-tightest text-neutral-400 group-hover:text-neutral-700 hover-sidebar"
            onClick={() => {
              logOutHandler();
            }}
          >
            Logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
