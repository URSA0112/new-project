"use client"
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
import chalk from "chalk";


export default function Home() {
  const [inputText, setInputtext] = useState("")
  function onChange(e) {setInputtext(e.target.value)}
  const [location , setLocation]=useState([])

  // const [storeLocation, setStoreLocation]=useState([])
  const arr = [];
  
 async function getWeather() {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries")
    const fetchedData = await response.json()
    const dataArr = fetchedData.data

  }
  
  getWeather()





  return (
    <div>
      <SearchBar inputText={inputText} handleChange={onChange}></SearchBar>
      <div className="flex min-w-[470px] min-h-[300px]">
        <LightLeft location={location}/> 
        <DarkRight />
      </div>
      <li className="">{location}</li>
    </div>
  );
}
