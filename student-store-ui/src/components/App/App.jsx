import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import { removeFromCart, addToCart, getQuantityOfItemInCart, getTotalItemsInCart } from "../../utils/cart";
import "./App.css";

function App() {

  // State variables
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", dorm_number: ""});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);


  // Toggles sidebar
  const toggleSidebar = () => setSidebarOpen((isOpen) => !isOpen);

  // Functions to change state (used for lifting state)
  const handleOnRemoveFromCart = (item) => setCart(removeFromCart(cart, item));
  const handleOnAddToCart = (item) => setCart(addToCart(cart, item));
  const handleGetItemQuantity = (item) => getQuantityOfItemInCart(cart, item);
  const handleGetTotalCartItems = () => getTotalItemsInCart(cart);

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };


  const handleOnCheckout = async (params = {}) => {
    setIsCheckingOut(true);
    console.log(userInfo.name);
    try {
      let orderData = {
        customer_id: parseInt(userInfo.name),
        total_price: 1.2,
        status: "checking"
      }
      const response = await axios.post("http://localhost:3000/orders", orderData);
      console.log("Order", response.data);
      const items = await createOrderItems(response.data.order_id);
      const price = await updatePrice({}, response.data.order_id);
      setCart({})
    }
    catch (error){
      console.log("Error fetching products: ", error);
    }
  }

  const createOrderItems = (order_id) => {
    console.log(cart);
    Object.entries(cart).forEach(async (key,val) => {
      try {
        let item = {
          product_id: parseInt(key[0]),
          quantity: key[1],
          price: parseFloat(products[key[0]-1].price)
        }
  
        const response = await axios.post(`http://localhost:3000/orders/${order_id}/items`, item);
        console.log(response.data);
      }
      catch (error){
        console.log("Error creating order items: ", error);
      }
    })
  }

  const updatePrice = async (params = {}, id) => {
    try {
      const response = await axios.get(`http://localhost:3000/orders/${id}`, {params});
      console.log(response.data);
    }
    catch (error){
      console.log("Error updating price: ", error);
    }
  }

  const fetchProducts = async (params = {}) => {
    try {
      const response = await axios.get("http://localhost:3000/products", {params});
      console.log("Fetched products", response.data);
      setProducts(Array.isArray(response.data) ? response.data : []);
    }
    catch (error){
      console.log("Error creating order: ", error);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar
          cart={cart}
          error={error}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isOpen={sidebarOpen}
          products={products}
          toggleSidebar={toggleSidebar}
          isCheckingOut={isCheckingOut}
          addToCart={handleOnAddToCart}
          removeFromCart={handleOnRemoveFromCart}
          getQuantityOfItemInCart={handleGetItemQuantity}
          getTotalItemsInCart={handleGetTotalCartItems}
          handleOnCheckout={handleOnCheckout}
          order={order}
          setOrder={setOrder}
        />
        <main>
          <SubNavbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  products={products}
                  isFetching={isFetching}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  addToCart={handleOnAddToCart}
                  searchInputValue={searchInputValue}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="/:productId"
              element={
                <ProductDetail
                  cart={cart}
                  error={error}
                  products={products}
                  addToCart={handleOnAddToCart}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  error={error}
                  products={products}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
 