import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterFour from "./components/useState/HookCounterFour";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      <ClassCounterOne />
      <HookCounterOne />
    </div>
  );
}

export default App;
