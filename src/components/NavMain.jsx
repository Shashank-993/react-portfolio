import React from 'react'
import me from "../assets/image.png";
import coding from "../assets/coding.svg";
import { Code2 } from 'lucide-react';
const NavMain = () => {
  return (
    <div className="flex items-center gap-2">
      {/* <img
        src={coding}
        className="w-10 h-10 lg:w-15 lg:h-15"
        alt="coding-icon"
      /> */}
      <Code2 className='text-purple-500 w-10 h-10'/>
      <img
        src={me}
        className="w-8 h-8 lg:w-12 lg:h-12 rounded-full outline-purple-500 outline-offset-2"
        alt="myphoto"
      />
    </div>
  );
}

export default NavMain