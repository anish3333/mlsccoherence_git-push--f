import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"



import Sidebar from "./components/Sidebar/Sidebar"
import Signup from "./components/Form/Signup"
import Signin from "./components/Form/Signin"
import Dialog1 from "./components/Form/Dialog1"
import Hero from "./components/Hero/Hero"
import Main from "./pages/Main"
import Faq from "./components/FAQ/Faq"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />



        {/* testing */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/main" element={<Main />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/checklists" element={<Sidebar />} />
        <Route path="/settings" element={<Sidebar />} />
        <Route path="/sales" element={<Sidebar />} />
        <Route path="/blogs" element={<Sidebar />} />
        <Route path="/notifications" element={<Sidebar />} />
        <Route path="/themes" element={<Sidebar />} />
        <Route path="/dialog" element={<Dialog1 linkText={"Sign In"} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
