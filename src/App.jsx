import axios from "axios";
import BasicExample from "./components/table";

const url = "http://universities.hipolabs.com/search?country=Australia";

axios.get(url).then((response) => console.log(response.data));

function App() {
  return (
    <div>
      <BasicExample />
    </div>
  );
}

export default App;
