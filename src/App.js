import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PorductList from "./pages/PorductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/productlist' element={<PorductList/>} />
      <Route path='/productlist/1' element={<SingleProduct/>} />
    </Routes>
    
    </BrowserRouter>
  ) 
};

export default App;