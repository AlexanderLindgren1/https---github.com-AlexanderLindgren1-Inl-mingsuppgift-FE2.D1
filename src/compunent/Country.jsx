// imported usestate to see if user click the picture to place the infomation  
import { useState } from "react"
//needed to uses function to place in app 
// used props to take the value of file Region send here
function Country(props, index) {
    let [ShowCountryInfo, setShowCountryInfo] = useState(false)

    // use return to print out
    return <div className="card" key={index}>

        <img src={props.Countrydata.flags.png} alt="" onClick={() => setShowCountryInfo(!ShowCountryInfo)} />
        {/*ShowCountryInfo will show the paragraf if its true */}
        {ShowCountryInfo && <div>
            <p>Countrys name: {ShowCountryInfo && props.Countrydata.name.common}</p>
            <p>capital: {ShowCountryInfo && props.Countrydata.capital}</p>

            <p> population: {ShowCountryInfo && props.Countrydata.population}</p>

        </div>}

    </div>
}

export default Country