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

      {/* <select id="numbers" onClick={() => {

        let number = document.getElementById("numbers").value
        return setRegion(number)
      }}>
        <option  value={""} selected>default </option>
        <option value={"africa"} >Afrika</option>
        <option value={"asia"}>asia</option>
        <option value={"europe"}>Europa</option>


      </select> */}

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
