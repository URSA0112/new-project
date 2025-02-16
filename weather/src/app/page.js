"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { Circle } from "./circle";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("")
  function handleInputChange(e) { setInputText(e.target.value) }
  const [locationList, setLocationList] = useState([])
  const [locationData, setLocationData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("Ulaanbaatar")
  const [currentWeatherDatas, setCurrentWeatherDatas] = useState(null)

  useEffect(() => {
    async function getLocation() {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const Data = await response.json()
      const countries = Data.data.map(each => each.countries)
      const locations = Data.data.flatMap(each => each.cities.map(city => `${city} ${each.country}`))
      setLocationData(locations)
    }
    getLocation()
  }, [])

  useEffect(() => {
    if (inputText.trim() === "") { setLocationList([]); return; }
    const filteredList = ((locationData
      .filter(location => location.toLowerCase().trim().includes(inputText.toLowerCase().trim()))
      .slice(0, 4)))
      .map((each, index) => <div key={index} onClick={() => locationClick(each)} className=" cursor-pointer hover:scale-105 hover:bg-white-100  hover:shadow-md transition-all duration-300 rounded-md p-2 w-[100%] justify-self-center text-center"
      >{each}</div>)

    setLocationList(filteredList)

  }, [inputText])

  function locationClick(each) {
    const city = each.lastIndexOf(" ");
    const location = city !== -1 ? each.substring(0, city) : each
    setLocationList([])
    setInputText("")
    return setSelectedLocation(location)
  }

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=bbb2b7f15ac1b4c9a93d2dc5bf9ce911&units=metric`)
      const weatherData = await response.json()
      setCurrentWeatherDatas(weatherData)
      console.log(weatherData)
    }
    getWeather()
  }, [selectedLocation])

  return (
    <div>
      <div className="flex min-w-[470px] min-h-[300px]">
        <LightLeft
          inputText={inputText}
          onChangeInput={handleInputChange}
          locationList={locationList}
          locationClick={locationClick}
          weather={currentWeatherDatas} />
        <DarkRight weather={currentWeatherDatas} />
      </div>
     
    </div>
  )
}
