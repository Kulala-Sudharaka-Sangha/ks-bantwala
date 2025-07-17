// import { Outlet } from "react-router-dom";
// import "./App.scss";
// import Footer from "./components/footer/Footer";
// import MasterMenu from "./components/menu/MasterMenu";
// import Header from "./components/header/Header";

import { fetchData } from "./store/slices/data-slice";
import { RootState, AppDispatch } from "./store/app-store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );

  // return (
  //   <div className="app">
  //     {/* <Header /> */}
  //     <div className="menu-container">
  //       <MasterMenu />
  //     </div>
  //     <div className="app-content">
  //       <Outlet />
  //     </div>
  //     <Footer />
  //   </div>
  // );
}

export default App;
