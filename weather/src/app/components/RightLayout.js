import { NightTitle } from "./right/RightTitle"
import { NightIcon } from "./right/RightIcon"
import { NightWeather } from "./right/RightWeather"
import { NightFooter } from "./right/RightFooter"
import { MiddleLogo } from "./Logo"

export function DarkRight() {
    return (

         <div className="bg-[#0F141E] w-1/2 h-screen flex items-center justify-center">
            <MiddleLogo></MiddleLogo>
                <div className="bg-[#111827]  w-[220px] h-[390px] rounded-lg" >
                    <NightTitle></NightTitle>
                    <NightIcon></NightIcon>
                    <NightWeather></NightWeather>
                    <NightFooter></NightFooter>
                </div>
            </div>


    )
}