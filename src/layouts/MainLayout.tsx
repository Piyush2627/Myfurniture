import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import NavigationBar from "../components/common/NavigationBar";

function MainLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
