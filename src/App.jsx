



import { Routes, Route, } from "react-router-dom"
import { lazy, useEffect } from "react";


import AuthLayout from "./layout/AuthLayout";


const Layout = lazy(() => import("./layout/Layout"));
const Login = lazy(() => import("../src/pages/login/Login"));
const SignUp = lazy(() => import("../src/pages/signup/SignUp"));
const Home = lazy(() => import("../src/pages/home/Home"));


// import Home from "./pages/home/Home";
import useDarkmode from "./Hooks/useDarkMode";








export default function App() {


  const [isDark] = useDarkmode();

  console.log("isDark", isDark);

  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
}, []);




  return (
    <main className={`${isDark ? "bg-dark text-white" : "bg-light"}`} style={{ width: "100vw", height: "100vh", overflowX: "hidden", overflowY: "hidden" }}>

      <Routes>

        <Route path="/" element={<AuthLayout />}>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Layout />}>

            <Route path="home" element={<Home />} />

          </Route>
        </Route>

      </Routes>


    </main>
  )
}