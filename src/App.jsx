import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProjectDetails from "./pages/ProjectDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/details/:id",
      element: <ProjectDetails />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
