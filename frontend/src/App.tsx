import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

const App = () => {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </Router>
    <div className="bg-red-500">
      {/* <Layout /> */}
    </div>
    </>

  )
}

export default App
