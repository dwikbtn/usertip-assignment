import React from "react";

import pBall from "../../assets/icons/pokeball.svg";
import gBall from "../../assets/icons/greatball.svg";
import mBall from "../../assets/icons/masterball.svg";
import walletIc from "../../assets/icons/wallet.svg";
import avatar from "../../assets/icons/avatar.png";
import { Menu } from "@headlessui/react";

const Topbar = ({ userInfo, logOutHandler }) => {
  return (
    <nav className="h-24 bg-neutral-100">
      <ul className="py-9 pr-10 flex justify-end items-center">
        <li className="mr-10">
          <img
            src={pBall}
            alt="pokeball count"
            className="w-5 mr-[6px] inline"
          />
          <span className="font-bold text-tiny text-neutral-400 tracking-tightest">
            {userInfo.pokeB}
          </span>
        </li>
        <li className="mr-10">
          <img
            src={gBall}
            alt="pokeball count"
            className="w-5 mr-[6px] inline"
          />
          <span className="font-bold text-tiny text-neutral-400 tracking-tightest">
            {userInfo.greatB}
          </span>
        </li>
        <li className="mr-10 ">
          <img
            src={mBall}
            alt="pokeball count"
            className="w-5 mr-[6px] inline"
          />
          <span className="font-bold text-tiny text-neutral-400 tracking-tightest">
            {userInfo.masterB}
          </span>
        </li>
        <li className="mr-10 ">
          <img
            src={walletIc}
            alt="pokeball count"
            className="w-5 mr-[6px] inline"
          />
          <span className="font-bold text-tiny text-neutral-400 tracking-tightest">
            {userInfo.coins}
          </span>
        </li>
        <li className="relative">
          <Menu>
            <Menu.Button>
              <div className="w-12 h-12 bg-secondary rounded-4xl">
                <img src={avatar} alt="avatar" />
              </div>
            </Menu.Button>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className="absolute w-52 px-6 py-7 bg-white right-0 rounded-xl text-sm text-neutral-400 hover:cursor-pointer hover:underline "
                    onClick={() => {
                      logOutHandler();
                    }}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
