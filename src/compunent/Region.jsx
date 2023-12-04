import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";

function Region(Props) {
    let [Regionsdata, setRegionsdata] = useState([])



    useEffect(() => {

        let fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/region/" + Props.data);
            const json = await response.json();
            setRegionsdata(json)

            json && console.log(response);
        }


        fetchData()

    }, [Props.data])

    return <ul  >{Regionsdata.length > 0 && Regionsdata.map((Country1, index) => <li key={index}><Country Countrydata={Country1} /> </li>
    )}

    </ul>







}

export default Region




