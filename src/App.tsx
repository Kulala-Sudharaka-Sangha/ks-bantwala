import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MasterMenu from "./components/menu/MasterMenu";
import RazorpayPayment from "./RazorpayPayment";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="menu-container">
        <MasterMenu />
      </div>
      <div className="app-content">
        {/* <Outlet /> */}
        <RazorpayPayment />
      </div>
      <Footer />
    </div>
  );
}

export default App;
