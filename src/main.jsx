import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Errorpage from "./components/errorpage/Errorpage.jsx";
import Appliedjobs from "./components/appliedjobs/Appliedjobs.jsx";
import Jobs from "./components/jobs/Jobs.jsx";
import Contact from "./components/contact/Contact.jsx";
import Statistics from "./components/statistics/Statistics.jsx";
import Blog from "./components/blog/Blog.jsx";
import Jobdetails from "./components/jobdetails/Jobdetails.jsx";
import AppliedJoblist from "./components/appliedjoblist/AppliedJoblist.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "appliedjobs",
        element: <Appliedjobs></Appliedjobs>,
      },
      {
        path: "appliedjoblist",
        loader: () => fetch("jobs.json"),
        element: <AppliedJoblist></AppliedJoblist>,
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      // dynamic router
      {
        path: "jobdetails/:id",
        loader: () => fetch("/jobs.json"),
        element: <Jobdetails></Jobdetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    {/* <App /> */}
  </StrictMode>,
);
