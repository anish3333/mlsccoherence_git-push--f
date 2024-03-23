import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Signup from "./components/Form/Signup"
import Signin from "./components/Form/Signin"


function App() {

  return (
    <>
      {/* <div className="w-20 border-2 h-20">Test</div> */}
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

      </Routes>
    </>
  )
}

export default App
