import { useState } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className="App">
      <header>Robo Friends</header>
      <div className="search-box-container">
        <SearchBox setSearchValue={setSearchValue} />
      </div>
      <br />
      <hr />
      <div className="cards-containers">
        <CardList robots={robots} searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
