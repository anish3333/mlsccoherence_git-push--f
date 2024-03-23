import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {

  return (
    <>
      {/* <div className="w-20 border-2 h-20">Test</div> */}
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/footer" element={<Footer />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
