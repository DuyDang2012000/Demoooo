import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/svgs/logo.svg";
import Aw from "../asset/svgs/aw.svg";
import Menu from "../asset/svgs/icon_menu.svg";
import Edit from "../asset/svgs/edit.svg";
import Waning from "../asset/svgs/waning.svg";

const Nav = () => {
  return (
    <div className=" bg-dark-600 ">
      <ul className="max-w-[960px] m-auto flex gap-[30px] h-[64px] items-center justify-between">
        <Link to="/" className="nav-link text-light ">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex gap-[30px] h-[64px] items-center">
          <Link to="/myPage" className="nav-link text-light flex gap-[12px]">
            <img src={Edit} alt="" />
            自分の記録
          </Link>
          <Link to="/page" className="nav-link text-light flex gap-[12px]">
            <img src={Aw} alt="" />
            チャレンジ
          </Link>
          <Link to="/page" className="nav-link text-light flex gap-[12px]">
            <img src={Waning} alt="" />
            お知らせ
          </Link>
          <img src={Menu} alt="" className="ml-[35px]" />
        </div>
      </ul>
    </div>
  );
};

export default Nav;
