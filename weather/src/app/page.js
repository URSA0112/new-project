"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
import chalk from "chalk";

const listStyle= "bg-black/30 backdrop-sepia-50 pl-5 w-[400px] h-[30px] text-white"
const dayTemp = "-30"
export default function Home() {
  const [inputText, setInputtext] = useState("")
  function onChange(e) { setInputtext(e.target.value) }
  const [locationArr, setLocationArr] = useState([])
  const [locationList, setLocationList] = useState([])
  const [filtered, setFiltered] = useState([])



function handleClickOnLocation(){

}

function check(){     
   setLocationList(filtered.map((each, index) => <div className={listStyle} onClick={handleClickOnLocation} key={index}>{each}</div>))
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
      <SearchBar inputText={inputText} handleChange={onChange} check={check} locationList={locationList}> </SearchBar>
      <div className="flex min-w-[470px] min-h-[300px]"> 
        <LightLeft dayTemp={dayTemp}/>
        <DarkRight />
      </div>
     

    </div>
  )
}
