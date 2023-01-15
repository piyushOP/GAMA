import Sidebar from "./comp/Sidebar";
import TopNavBar from "./comp/TopNavbar";

const Layout = ({ children }) => {

  return (
    <div class="main_div">
      <Sidebar />
      <TopNavBar />
      <main>
          {children}
      </main>
    </div>
  )
}

export default Layout;