import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/action/userAction";
import Toast from "./loginpages/toast";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import UserHomePage from "./loginpages/UserHomePage";
import UserLoginPage from "./loginpages/UserLoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";
import UserPage from "./loginpages/UserPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />

          <Route path="/user/home" element={<UserHomePage />} />
          <Route path="/user/login" element={<UserLoginPage />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
      <Toast />
    </>
  );
}

export default App;
