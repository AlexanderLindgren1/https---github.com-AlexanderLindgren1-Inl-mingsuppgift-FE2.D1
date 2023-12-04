import { useState } from "react";
import './App.css';
import Region from "./compunent/Region";
import { Footer } from "./compunent/Footer";




function App() {

  let [chooseRegion, setRegion] = useState("africa")


  let [chooseenstyle, setchooseenstyle] = useState(false)

  let changebtn = chooseenstyle ? "List" : "Option"
  return (
    <div className="App">

      <div className="Container">

        <button onClick={() => setRegion("africa")} >Afrika</button>
        <button onClick={() => setRegion("asia")}>asia</button>
        <button onClick={() => setRegion("europe")}>Europa</button>

      </div>












      <Region data={chooseRegion} />

      <Footer />


    </div >
  );
}

export default App;
