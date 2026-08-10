import React from "react";
import me from "../assets/image.png";
import { Code2 } from "lucide-react";
const NavMain = () => {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="text-purple-500 w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" />
      <img
        src={me}
        className="w-8 h-8 lg:w-12 lg:h-12 rounded-full outline-purple-500 outline-offset-2"
        alt="myphoto"
      />
    </div>
  );
};

export default NavMain;
