import Login from "./components/Form";
import OrderSpace from "./components/OrderSpace";
import { GuestNavbar, UserNavbar, AuthNavbar } from "./components/NavBar.js";

function App() {
  return (
      <div className="app">
      //Showing 3 of them individually
      <AuthNavbar />
      <UserNavbar />
      <GuestNavbar/>
      <Login/>
      <OrderSpace/>
    </div>
  );
}

export default App;
