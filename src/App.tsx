import "./App.scss";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MasterMenu from "./components/menu/MasterMenu";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { setActiveRouterPage } from "./store/slices/ui-controls";
import { useDispatch } from "react-redux";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setActiveRouterPage(location.pathname));
    logPageVisit();
  }, []);

  const logPageVisit = async () => {
    const docRef = doc(db, "pageVisits", "visitCount");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        count: increment(1),
      });
    } else {
      await setDoc(docRef, {
        count: 1,
      });
    }
  };

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
