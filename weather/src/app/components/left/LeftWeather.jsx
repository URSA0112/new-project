export function DayWeather(props) {
    return (

        <div className="bg-transparent w-[80%] h-[auto] absolute top-[57%] pl-[10%]">
            <h1 className=" text-[30px] sm:text-[40px] lg:text-[65px] 2xl:text-[110px]">{props.dayTemp}</h1>
            <p className="text-[15px] sm:text-[20px] lg:text-[20px] 2xl:text-[40px]">foggy</p>

        </div>
    )
}