import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./Dashbord";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashbord />}>
        
        </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App