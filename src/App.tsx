import "./App.css";
import Counter from "./pages/counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
