import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'


function App() {
  const [countries , setContries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const hook = () =>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setContries(response.data)
      })
  }

  useEffect (hook, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleClick = (event) => {
    setNewFilter(event.target.value)
  }
  const countriesToShow = (newFilter === '')
  ? countries
  : countries.filter(country => country.name.common.toLocaleUpperCase().includes(newFilter.toLocaleUpperCase())) 


  return (
    <div>
      <h1>Countries</h1>
      <br/>
        <Filter filter={newFilter} onChangeFilter={handleFilterChange} />
      <br/>
        <ShowCountries countries={countriesToShow} handleClick={handleClick} />
    </div>
  )
}

export default App;
