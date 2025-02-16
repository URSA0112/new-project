import { DayTitle } from "./left/LeftTitle"
import { DayIcon } from "./left/LeftIcon"
import { DayWeather } from "./left/LeftWeather"
import { DayFooter } from "./left/LeftFooter"
import { SearchBar } from "./SearchBar"


export const listStyle = "bg-black/30 backdrop-sepia-50 pl-5 w-[400px] h-[30px] text-white"
export function LightLeft(props) {

    return (<>
        <SearchBar inputText={props.inputText} 
        onChangeInput={props.onChangeInput} 
        locationList={props.locationList}
       locationClick={props.locationClick}> </SearchBar>
        
        <div className="bg-[var(--bgWhite-color)] w-1/2 h-screen flex items-center justify-center " >

            <div className=" bg-[var(--day-color)] w-[65%] h-[70%] p-[15px] z-[2] backdrop-blur-[10px] 

                rounded-lg justify-self-center 
                block relative
                min-w-[200px] min-h-[300px]">
                <DayTitle></DayTitle>
                <DayIcon></DayIcon>
                <DayWeather weather={props.weather}></DayWeather>
                <DayFooter></DayFooter>
            </div>

        </div>
    </>
    )
}