import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MasterMenu from "./components/menu/MasterMenu";

function App() {
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
