import "./App.css";
import Home from "./Georgian-Version/Home.jsx";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <p>მთავარი</p>
          <p>მენიუ</p>
          <p>გალერეა</p>
          <p>სიახლეები და აქციები</p>
        </nav>
      </header>

      <Home />

      {/* <img src="./assets/restaurant-interior.jpg" alt="" /> */}
    </>
  );
};

export default App;
