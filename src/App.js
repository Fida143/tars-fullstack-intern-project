import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [DarkMode, setDarkMode] = useState(false);
  const [loding, setLoding] = useState(false);

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos?page=1&limit=100;query=office&client_id=hz2XlFWL-fFMCeSDEP0CzKl2IHV6IcNBP6yPHewqH2o"
      );
      if (data?.ok) {
        setLoding(false);
      } else {
        setLoding(true);
      }
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />
      <Main
        images={images}
        fetchApi={fetchApi}
        DarkMode={DarkMode}
        loding={loding}
      />
    </>
  );
}

export default App;
