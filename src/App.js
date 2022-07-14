
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Notfound/Notfound';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddItem from './components/AddItem/AddItem';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import ItemList from './components/ItemList/ItemList';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageinventory" element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path="/additem" element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path="/inventoryDetail/:inventoryID" element={<RequireAuth>
          <InventoryDetail></InventoryDetail>
        </RequireAuth>}></Route>
        <Route path="/itemlist" element={<RequireAuth>
          <ItemList></ItemList>
        </RequireAuth>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
