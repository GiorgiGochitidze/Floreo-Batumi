import "./App.css";
import Home from "./Georgian-Version/Home.jsx";
import RestaurantImg from './assets/restaurant-interior.jpg'

const App = () => {
  return (
    <>
      <header>
        <nav>
          <p>მთავარი</p>
          <p>მენიუ</p>
          <p>გალერეა</p>
          <p>სიახლეები და აქციები</p>
          <p>კონტაქტი</p>
        </nav>
      </header>

      <img className="restaurant-img" src={RestaurantImg} alt="restaurant image" />

      <Home />

      {/* <img src="./assets/restaurant-interior.jpg" alt="" /> */}
    </>
  );
};

export default App;
