import Login from "./components/Form";
import OrderSpace from "./components/OrderSpace";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Login/>
      <OrderSpace/>
    </div>
  );
}

export default App;
