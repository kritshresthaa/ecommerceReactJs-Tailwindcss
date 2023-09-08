import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import categories from "./categories";
import products from "./products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Sellers from "./pages/Sellers";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} categories={categories} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="seller" element={<Sellers />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="/product/:productId"
            element={<Buy products={products} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
