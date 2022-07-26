import CardList from "./CardList";
import { robots } from "./robots";
function App() {
  return (
    <div className="App">
      <h1>Hello React </h1>
      <br />
      <div className="cards-containers">
        <CardList robots={robots} />
      </div>
    </div>
  );
}

export default App;
