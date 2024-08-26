



import { Routes, Route, } from "react-router-dom"

import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

 






export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflowX: "hidden", overflowY: "hidden" }}>

      <Routes>

        <Route path="/" element={<AuthLayout />}>

          <Route path="/" element={<Layout />}>

            <Route path="home" element={<Home />} />





          </Route>
        </Route>

      </Routes>


    </main>
  )
}