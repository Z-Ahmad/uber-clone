import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar(){
  return(
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">

      <img src="/images/uber.svg" alt="" width={50} height={50}/>

      <ul className="hidden space-x-4 md:flex">
        <li className="navLink">Company</li>
        <li className="navLink">Safety</li>
        <li className="navLink">Help</li>
        <li className="navLink">Products</li>
      </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}


export default Navbar