
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Notfound/Notfound';
import ManageInventory from './components/ManageInventory/ManageInventory';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageinventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
