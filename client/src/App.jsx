import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ImSpinner3 } from "react-icons/im"; 
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CreateBlog from "@/pages/CreateBlog";
import { Toaster } from "sonner";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import DashBoard from "./pages/DashBoard";
import UpdateBlog from "./pages/UpdateBlog";
import DashBlog from "./pages/BlogPage";
import Blogs from "./components/PublicBlogs";
import Search from "./pages/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="search" element={<Search />} />
      <Route path="post/:postSlug" element={<DashBlog />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="create-blog" element={<CreateBlog />} />
      <Route element={<PrivateRoute />} >
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="update-blog/:postId" element={<UpdateBlog />} />
      </Route>
    </Route>
  )
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating some initial loading (e.g., router initialization, fetching)
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulated loading time
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
          <div className="flex flex-col items-center">
            <ImSpinner3 className="w-16 h-16 text-white animate-spin" />
            <p className="mt-4 text-lg text-white">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster />
        </>
      )}
    </>
  );
};

export default App;
