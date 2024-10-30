import "./App.css";
// import logo from "./horse_fav.ico";
import logo2 from "./logo2.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const date = getFullYear();
  const name = getFooterCopy(false);
  return (
    <section>
      <div className="App-header">
        <img src={logo2} alt="logo" />
        <h2>School dashboard</h2>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input name="password"/>
        <button >OK</button>
      </div>
      <div className="App-footer">
        <p>
          {date} - {name}
        </p>
      </div>
    </section>
  );
}

export default App;
