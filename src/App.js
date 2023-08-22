import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";
import Header from "./loginpages/Header";
import Toast from "./loginpages/toast";
import Body from "./loginpages/body";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());
    }
  }, []);

  return (
    <>
      <Header />
      <Body />
      <Toast />
    </>
  );
}

export default App;
