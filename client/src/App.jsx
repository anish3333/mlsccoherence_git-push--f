import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Signup from "./components/Form/Signup"
import Signin from "./components/Form/Signin"
import Dialog1 from "./components/Form/Dialog1"
import Hero from "./components/Hero/Hero"
import Main from "./components/Hero/Main"
import YoutubeAnalyticsDashboard from "./pages/YoutubeAnalyticsDashboard"



function App() {

  return (
    <>
      {/* <div className="w-20 border-2 h-20">Test</div> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/home" element={<Hero />} /> */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Sidebar />} />
        <Route path="/checklists" element={<Sidebar />} />
        <Route path="/settings" element={<Sidebar />} />
        <Route path="/sales" element={<Sidebar />} />
        <Route path="/blogs" element={<YoutubeAnalyticsDashboard />} />
        <Route path="/notifications" element={<Sidebar />} />
        <Route path="/themes" element={<Sidebar />} />
        <Route path="/dialog" element={<Dialog1 />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
