import { Outlet } from "react-router-dom";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
