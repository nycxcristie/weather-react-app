import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import { BallTriangle } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Chantilly" />

        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="pink"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </header>
    </div>
  );
}

export default App;
