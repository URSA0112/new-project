import { NightTitle } from "./right/RightTitle"
import { NightIcon } from "./right/RightIcon"
import { NightWeather } from "./right/RightWeather"
import { NightFooter } from "./right/RightFooter"
import { Logo } from "./Logo"


export function DarkRight() {
    return (

        <div className="bg-[#0F141E] w-1/2 h-screen flex items-center justify-center relative text-white">
            <Logo></Logo>
            <div className="bg-[var(--night-color)] w-[65%] h-[70%] p-[15px] z-[2] backdrop-blur-[10px] 
                rounded-lg justify-self-center 
                block relative
                min-w-[200px] min-h-[300px] " >
                <NightTitle></NightTitle>
                <NightIcon></NightIcon>
                <NightWeather></NightWeather>
                <NightFooter></NightFooter>
                
            </div>
        </div>


    )
}