import { NightTitle } from "./right/RightTitle"
import { NightIcon } from "./right/RightIcon"
import { NightWeather } from "./right/RightWeather"
import { NightFooter } from "./right/RightFooter"


export function DarkRight() {
    return (

        <div className="bg-[#0F141E] w-1/2 h-screen flex items-center justify-center">
   
            <div className="bg-[#111827]  w-[60%] h-[70%] rounded-lg backdrop-blur-[10px]" >
                <NightTitle></NightTitle>
                <NightIcon></NightIcon>1
                <NightWeather></NightWeather>
                <NightFooter></NightFooter>
            </div>
        </div>


    )
}