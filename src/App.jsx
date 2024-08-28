



import { Routes, Route, } from "react-router-dom"
import { lazy } from "react";


import AuthLayout from "./layout/AuthLayout";


const Layout = lazy(() => import("./layout/Layout"));
const Login = lazy(() => import("../src/pages/login/Login"));
const SignUp = lazy(() => import("../src/pages/signup/SignUp"));


import Home from "./pages/home/Home";








export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflowX: "hidden", overflowY: "hidden" }}>

      <Routes>

        <Route path="/" element={<AuthLayout />}>

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