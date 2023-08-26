import "./App.css";
import { MainRouter } from "./routes/MainRouter";
import { NavBarComponent } from "./components/Navbar/NavBarComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <MainRouter />
    </>
  );
}

export default App;
