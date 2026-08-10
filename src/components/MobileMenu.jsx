import { motion } from "motion/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, User, Layers3, FolderKanban } from "lucide-react";
import me from "../assets/image.png";
import { useLenis } from "lenis/react";

const menuItems = [
  {
    title: "Experience",
    icon: <User className="h-5 w-5" />,
  },
  {
    title: "Skills",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Projects",
    icon: <FolderKanban className="h-5 w-5" />,
  },
];

const MobileMenu = () => {
  const lenis = useLenis();
  return (
    <Sheet>
      <SheetTrigger asChild className="z-10">
        <Button
          variant="ghost"
          className="lg:hidden rounded-full hover:bg-purple-600/15"
        >
          <Menu className="h-6 w-6 text-purple-500" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="flex w-[320px] flex-col overflow-hidden border-l border-purple-500/20 bg-gradient-to-b from-[#111118] via-[#0B0909] to-black p-0"
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-700/10 blur-[120px]" />

        {/* Header */}
        <SheetHeader className="relative border-b border-purple-500/20 px-6 py-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <img
                src={me}
                alt="Shashank Mengar"
                className="h-14 w-14 rounded-full border border-purple-500/40 object-cover shadow-lg shadow-purple-600/30"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  Shashank Mengar
                </h2>

                <p className="text-sm text-purple-300">React Developer</p>
              </div>
            </div>
            <p className="text-sm text-blue-300">SAL College of Engineering</p>
            <p className="text-sm text-gray-300">B.E. Computer Engineering</p>
            <p className="text-sm text-green-300">CGPA: 7.52</p>
          </div>
        </SheetHeader>

        {/* Navigation */}
        <div className="relative flex flex-1 flex-col gap-3 p-5">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.35,
              }}
            >
              <SheetClose asChild>
                <Button
                  onClick={() => lenis?.scrollTo(`#${item.title}`)}
                  variant="ghost"
                  className="
                    group
                    h-14
                    w-full
                    justify-start
                    gap-4
                    rounded-xl
                    px-5
                    text-base
                    font-medium
                    text-pink-300
                    transition-all
                    duration-300
                    hover:bg-purple-600/15
                    hover:text-purple-300
                    hover:shadow-lg
                    hover:shadow-purple-700/20
                  "
                >
                  <span className="text-pink-300 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>

                  {item.title}
                </Button>
              </SheetClose>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-purple-500/20 px-6 py-5">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gray-500">
            Built with React • Tailwind • Motion
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
