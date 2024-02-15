
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About";
import SignOut from "./pages/SIgnOut"
import SignIn from "./pages/SignIn"
import Header from "./components/Header";

export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-out" element={<SignOut/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/profile" element={<Profile />}/>
   </Routes>
    </BrowserRouter>
  )
}