"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";


export default function Home() {
  const [inputText, setInputtext] = useState("")
  function onChange(e) {setInputtext(e.target.value)}

  // const [storeLocation, setStoreLocation]=useState([])
  
  async function getWeather() {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const fetchedData = await response.json()
    const dataArr = fetchedData.data
    const countries = dataArr.map(each => each.country)
    const citiesArr = dataArr.map(each => each.cities)
    const cities = Object.values(citiesArr).flat(Infinity)
    console.log(cities)

  }
  getWeather()
  
console.log(location)
  return (
    <div>
      <SearchBar inputText={inputText} handleChange={onChange}></SearchBar>
      <div className="flex min-w-[470px] min-h-[300px]">
        <LightLeft />
        <DarkRight />
      </div>
    </div>
  );
}
