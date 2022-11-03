import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar(){
  return (
    <header className="flex justify-between px-4 bg-black text-white">
      <div className="flex items-center space-x-2 md:space-x-10">
        <img  
        className="cursor-pointer py-2" 
        src="/images/uber.svg" 
        alt="" 
        width={40} 
        height={40}
        style={{fill:'#FFFFFF'}}
        />
        
        <ul className="hidden space-x-4 md:flex">
          <li>Company</li>
          <li>Safety</li>
          <li>Help</li>
          <li>Products</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light ml-10">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}


export default Navbar