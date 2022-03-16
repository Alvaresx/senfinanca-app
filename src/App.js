import "./App.css";
import MyRoutes from "./Routes";
import Drawer from "./components/Drawer";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Drawer />
        <MyRoutes />
      </div>
    </>
  );
}

export default App;
