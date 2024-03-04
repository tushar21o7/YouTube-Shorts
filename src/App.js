// import VideoContainer from "./pages/VideoContainer";
// import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

function App() {
  const [data, setData] = useState(null);

  const url = "https://mocki.io/v1/51bf5985-a727-40d2-9b80-3ae11e195047";

  // fetch User details
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data && <DisplayData data={data} />}
    </div>
  );
}

export default App;
