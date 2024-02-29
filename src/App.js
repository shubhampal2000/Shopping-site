import "./App.css";
import Home from "./Components/pages/Home/Home.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Addproduct from "./Components/Addproduct";
import AddToCart from "./Components/pages/AddToCart/AddToCart.jsx";
import Overlay from "./Components/Sharedcomponents/Overlay/Overlay.jsx";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />} />
        <Route path="home" element={<Home />}/>
        <Route path="/item/:id" element={<Overlay/>}/>  
        <Route path="addtocart" element = {<AddToCart/>}/>
        <Route path="addproduct" element={<Addproduct/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
