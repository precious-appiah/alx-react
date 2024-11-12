import "./App.css";
// import logo from "./horse_fav.ico";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Notifications from "./Notifications/Notifications";



function App() {
  return (
    <>
      <Notifications />
      <div className=".App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
