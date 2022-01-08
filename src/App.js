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
      <Route path='/E-Commerce-Website' element={<Home/>} />s
      <Route path='/E-Commerce-Website/login' element={<Login/>} />
      <Route path='/E-Commerce-Website/register' element={<Register/>} />
      <Route path='/E-Commerce-Website/cart' element={<Cart/>} />
      <Route path='/E-Commerce-Website/productlist' element={<PorductList/>} />
      <Route path='/E-Commerce-Website/productlist/1' element={<SingleProduct/>} />
    </Routes>
    
    </BrowserRouter>
  ) 
};

export default App;