import {BrowserRouter, Routes, Route} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/login" element={<h1>login</h1>}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/task" element={<h1>task</h1>}></Route>
        <Route path="/add-task" element={<h1>create task</h1>}></Route>
        <Route path="/task/id" element={<h1>task</h1>}></Route>
        <Route path="/profile" element={<h1>Profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
