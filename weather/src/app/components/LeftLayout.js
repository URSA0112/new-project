import { DayTitle } from "./left/LeftTitle"
import { DayIcon } from "./left/LeftIcon"
import { DayWeather } from "./left/LeftWeather"
import { DayFooter } from "./left/LeftFooter"


export function LightLeft() {
    return (
            <div className="bg-pink-400 w-1/2 h-screen flex items-center justify-center " >
                <div className=" bg-[rgba(255,255,255,0.4)] w-[60%] h-[70%] rounded-lg justify-self-center z-[2] backdrop-blur-[10px] p-[15px] block relative">
                    <DayTitle></DayTitle>
                    <DayIcon></DayIcon>
                    <DayWeather></DayWeather>
                    <DayFooter></DayFooter>
                </div>

            </div>

    )
}