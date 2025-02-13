"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
import chalk from "chalk";


export default function Home() {
  const [inputText, setInputtext] = useState("")
  function onChange(e) { setInputtext(e.target.value) }
  const [locationArr, setLocationArr] = useState([])
  const [locationList, setLocationList] = useState([])
  const [filtered, setFiltered] = useState([])

function check(){     
   setLocationList(filtered.map((each, index) => <li key={index}>{each}</li>))
}


  useEffect(() => {
    async function getWeather() {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const fetchedData = await response.json()
      const dataArr = fetchedData.data
      const country = dataArr.map(each => each.country)
      const locationForm = dataArr.flatMap(each => each.cities.map(city => `${city} ${each.country}`));
      setLocationArr(locationForm)
      setFiltered(locationForm.filter(each => each.toLowerCase().slice(0,100).includes(inputText.toLowerCase())))

    }

    getWeather()
  }, [check]
  )

  return (
    <div>
      <SearchBar inputText={inputText} handleChange={onChange}></SearchBar>
      <div className="flex min-w-[470px] min-h-[300px]"> 
         <button onClick={check} className="bg-slate-600">check</button>
        {/* <LightLeft />
        <DarkRight /> */}
      </div>
      <ul className="">{locationList}</ul>

    </div>
  )
}
