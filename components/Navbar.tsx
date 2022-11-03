import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar(){
  return(
    <header>
      <div className="flex items-center space-x-2 md:space-x-10"></div>
      <img src="/images/uber.svg" alt="" width={50} height={50}/>
    </header>
  )
}

export default Navbar