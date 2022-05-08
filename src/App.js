
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/Add Item/AddItem';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login'
import MyItem from './components/My-Item/MyItem';
import Navbar from './components/Nabvar/Navbar';

import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/contact' element={<RequireAuth>
           <Contact></Contact>
        </RequireAuth>}></Route>
        <Route path='/update/:id' element={
        <RequireAuth>
          <Update></Update>
        </RequireAuth>
      
      }></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
