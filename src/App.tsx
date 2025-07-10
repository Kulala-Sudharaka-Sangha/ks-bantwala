import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import MasterMenu from "./components/menu/MasterMenu";
// import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
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
