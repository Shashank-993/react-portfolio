import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { Heart } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-purple-500/20 bg-gradient-to-b from-black via-[#09090B] to-black">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

      <div className="relative mx-auto flex w-[90%] max-w-7xl flex-col items-center py-24">
        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-pink-200 lg:text-5xl">
            Let's Build Something Amazing
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            I'm always interested in creating beautiful, performant and
            user-friendly web applications. Whether it's a freelance project or
            a full-time opportunity, I'd love to hear from you.
          </p>
          <a href="mailto:shashaaank21@gmail.com">
            <Button className="mt-10 rounded-xl bg-purple-600 px-8 py-6 text-base transition-all hover:scale-105 hover:bg-purple-700">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </a>
        </motion.div>

        {/* Divider */}

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-purple-600/30 to-transparent" />

        {/* Socials */}

        <div className="flex flex-wrap items-center justify-center gap-5">
          <motion.a
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Shashank-993"
            className="rounded-2xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-purple-500/50 hover:bg-purple-600/10"
            target="_blank"
          >
            <FaGithub className="h-6 w-6 text-purple-300" />
          </motion.a>

          <motion.a
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/shashank-mengar/"
            className="rounded-2xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-blue-500/50 hover:bg-blue-600/10"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7 text-blue-300" />
          </motion.a>

          <motion.a
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:shashaaank21@gmail.com"
            className="rounded-2xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-purple-500/50 hover:bg-purple-600/10"
          >
            <Mail className="h-6 w-6 text-purple-300" />
          </motion.a>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex w-full flex-col items-center justify-between gap-5 border-t border-purple-500/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p className="flex items-center gap-2">
            © {year} Shashank Mengar. Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            using React.
          </p>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-purple-500/20 bg-purple-600/10 px-4 py-2 text-purple-300">
              React
            </span>

            <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2 text-blue-300">
              Motion
            </span>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-600/10 px-4 py-2 text-cyan-300">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Back to top */}

        <motion.button
          whileHover={{
            y: -5,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="mt-14 rounded-full border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-purple-500/60 hover:bg-purple-700/20"
        >
          <ArrowUp className="h-5 w-5 text-purple-300" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
