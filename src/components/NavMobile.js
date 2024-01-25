import React from "react";

import { navData } from "../data";
import { CgClose } from "react-icons/cg";

// import { CgClose } from "react-icons/cg";

const NavMobile = ({setNavMobile}) => {
  return (
    <div
      className="lg:hidden bg-violet h-full top-0 bottom-0 w-80
   flex justify-center "
    >
      <div onClick={()=>setNavMobile(false)} className="absolute top-2 left-2 cursor-pointer">
        <CgClose className="text-3xl" />
      </div>
      <div className="py-10">

      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((items,index)=>
        <li key={index}>
          <a href={items.href}>{items.name}</a>
        </li>
        )}
      </ul>
      </div>
    </div>
  );
};

export default NavMobile;
