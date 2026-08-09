import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProjectDetails from "./pages/ProjectDetails";
import ReactLenis from "lenis/react"
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
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <RouterProvider router={router}></RouterProvider>
    </ReactLenis>
  );
};

export default App;
