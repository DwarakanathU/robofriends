import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [robots, setRobots] = useState([]);
  console.log(robots);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setRobots(res.data));
  }, []);
  console.log(searchValue);
  return (
    <div className="App">
      <header>Robo Friends</header>
      <div className="search-box-container">
        <SearchBox setSearchValue={setSearchValue} />
      </div>
      <br />
      <hr />
      <Scroll>
        <div className="cards-containers">
          <CardList robots={robots} searchValue={searchValue} />
        </div>
      </Scroll>
    </div>
  );
}

export default App;
