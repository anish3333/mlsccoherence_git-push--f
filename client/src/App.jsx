import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      {/* <div className="w-20 border-2 h-20">Test</div> */}
      <Routes>
        <Route path="/" element={<Footer />}>
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
