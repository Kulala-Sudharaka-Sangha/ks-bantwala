import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MasterMenu from "./components/menu/MasterMenu";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { setActiveRouterPage } from "./store/slices/ui-controls";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setActiveRouterPage(location.pathname));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="menu-container">
        <MasterMenu />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
