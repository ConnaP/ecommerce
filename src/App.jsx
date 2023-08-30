import { MainRouter } from "./routes/MainRouter";
import { NavBarComponent } from "./components/Navbar/NavBarComponent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBarComponent />
      <MainRouter />
      <Footer />
    </>
  );
}

export default App;
