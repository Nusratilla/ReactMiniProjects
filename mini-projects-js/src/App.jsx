import { BrowserRouter, Routes, Route } from "react-router-dom"

import SideBar from "./components/SideBar"
import StopWatch from "./pages/stopWatch/StopWatch"
import ToDo from "./pages/toDo/ToDo"
import Weather from "./pages/weather/Weather"


const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route index element={<Weather />} />
        <Route path="stopWatch" element={<StopWatch/>}/>
        <Route path="toDo" element={<ToDo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App