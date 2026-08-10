import fb1 from "../assets/freshbites-1.png";
import fb2 from "../assets/freshbites-2.png";
import fb3 from "../assets/freshbites-3.png";
import fb4 from "../assets/freshbites-4.png";
import b1 from "../assets/buynest-1.png";
import b2 from "../assets/buynest-2.png";
import b3 from "../assets/buynest-3.png";
import b4 from "../assets/buynest-4.png";
import w1 from "../assets/weather-1.png";
import w2 from "../assets/weather-2.png";
import w3 from "../assets/weather-3.png";
import tl from "../assets/tiklist-light.png";
import td from "../assets/tiklist-dark.png";
export const projects = [
  {
    id: 1,
    title: "Fresh Bites",
    subTitle: "Food delivery app",
    description:
      "Fresh Bites is a food delivery app which I made during my react.js internship at maxgen technologies.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "tailwind CSS",
      "firebase auth",
      "shadCN UI",
      "Geolocation API",
      "redux toolkit",
      "zod",
    ],
    images: [fb1, fb2, fb3, fb4],
    live: "https://comfy-kheer-efca89.netlify.app/",
    github: "https://github.com/Shashank-993/FreshBites",
  },
  {
    id: 2,
    title: "Weather Now",
    subTitle: "Weather forecast app",
    description:
      "Weather Now is a frontend mentor challenge which features making a weather forecast app with the help of open-meteo api",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "tailwind CSS",
      "shadCN UI",
      "zustand",
      "open-meteo API",
    ],
    images: [w1, w3, w2],
    live: "https://weather-now-10826.vercel.app/",
    github: "https://github.com/Shashank-993/React-FM/tree/main/weather-app",
  },
  {
    id: 3,
    title: "BuyNest",
    subTitle: "E-commerce store",
    description:
      "BuyNest is an ecommerce store with features like search, filter through categories, sort according to rating and cart.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "tailwind CSS",
      "firebase auth",
      "shadCN UI",
      "redux toolkit",
      "zod",
    ],
    images: [b2, b1, b3, b4],
  },
  {
    id: 4,
    title: "tiklist",
    subTitle: "Todo app",
    description:
      "tiklist is another frontend mentor challenge which features making a simple todo app where user can add and remove the todos also mark the todo as completed and remove the completed todos as well. The project has light/dark mode feature, filter the todos by all, active and completed filters and the core feature of this project is drag and drop to reorder the todo list.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "tailwind CSS",
      "shadCN UI",
      "dnd-kit",
    ],
    images: [tl, td],
    live: "https://tiklist.netlify.app/",
    github: "https://github.com/Shashank-993/React-FM/tree/main/todo-app",
  },
];
