import Country from "./Country"
import Language from "./Language"
import Weather from "./Weather"

function ShowCountries ({countries , handleClick}) {
    if (countries.length > 10){
        return(
            <div>Too many matches, specify another filter</div>
        )
    }
    else if ((countries.length <=10) && (countries.length > 1)){
        return(
            <ul>
                {countries.map(country => (<Country key={country.idd.root+country.idd.suffixes[0]} name={country.name} handleClick={handleClick}/>))}
            </ul>
        )
    }
    else if (countries.length === 1){
        let valuesOfLanguages = Object.values(countries[0].languages)    
        return(
        <div>
            <h2>{countries[0].name.common}</h2>
            <br></br>
            <p>Capital: {countries[0].capital[0]}</p>
            <p>Potulation: {countries[0].population}</p>
            <br></br>
            <br></br>
            <h3>Languages</h3>
            <ul>
                {valuesOfLanguages.map(language => (<Language key={language} language={language}/>))} 
            </ul>
            <br></br>
            <img src={countries[0].flags.png} alt="Flag"></img>
            <br></br>
            <Weather capital={countries[0].capital[0]}/>
        </div>
        )
    }
    else{
        return(
            <div>No matches or database is loading</div>
        )
    }

}

export default ShowCountries