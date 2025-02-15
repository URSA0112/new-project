"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("")
  function handleInputChange(e) { setInputText(e.target.value) }
  const [locationList, setLocationList] = useState([])
  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    async function getWeather() {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const Data = await response.json()
      const countries = Data.data.map(each => each.countries)
      const locations = Data.data.flatMap(each => each.cities.map(city => `${city} ${each.country}`))
      setLocationData(locations)
    }
    getWeather()
  }, [])

  useEffect(() => {
    if (inputText.trim() === "") { setLocationList([]); return; }
    const filteredList = ((locationData
      .filter(location => location.toLowerCase().trim().includes(inputText.toLowerCase().trim()))
      .slice(0, 7)))
      .map((each, index) => <div key={index} onClick={()=>selectedList(each,index)}  className="cursor-pointer hover:scale-105 hover:bg-white-100 hover:shadow-md transition-all duration-300 rounded-md p-2"
      >{each}</div>)

    setLocationList(filteredList)

  }, [inputText])

  function selectedList(each, index) {
   console.log(each,index)
  }

  return (
    <div>
  
      <div className="flex min-w-[470px] min-h-[300px]">
        <LightLeft inputText={inputText} onChangeInput={handleInputChange} locationList={locationList}
        eachList={selectedList} />
        <DarkRight />
      </div>
    </div>
  )
}
