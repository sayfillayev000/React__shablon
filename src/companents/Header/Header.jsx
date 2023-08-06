import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [change, setChange] = useState(""); // imputni value sini olishni 1- yo'li useState orqali bunda inputga onChange event yoziladi
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (change.length > 0) {
      navigate(`/search/${change}`);
    }else{
      navigate('/')
    }
  }, [change]);
  const hendleSubmit = (e) => {
    // ikkinchi yo'li form ga onSubmit event yoziladi unga function yoziladi buni o'zi bilan ikkixil olsa bo'ladi e.target[0].valyue qilsaham bo'ladi lekin input 1 yoki 2 index ga almashganda target[0] o'zgarishi kerak shuning uchun inoutga id yoki name atribut yozib olish yaxshi yo'li
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target.elements.query.value);
    navigate(`/search/${change}`);
    setChange('')
  };
  return (
    <div className=" z-10 fixed top-0 left-0 container mx-auto ">
      <div className="flex  items-center justify-between bg-blue-500 p-8 text-white">
        <NavLink className=" uppercase" to={"/"}>
          T M D B
        </NavLink>
        {/* <form onSubmit={hendleSubmit}>
          <input
            value={change}
            onChange={(e) => setChange(e.target.value)}
            className=" text-blue-500"
            type="search"
            name="query"
          />
        </form> */}
        <ul className=" flex gap-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/movie"}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={"/popular-People"}>people</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
