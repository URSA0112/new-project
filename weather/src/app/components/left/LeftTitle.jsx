export function DayTitle(props) {

    function convertTimestampToDate(dt) {
        return new Date(dt * 1000).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    }
    
    const cityName = props.weather?.name || "Loading...";
    const date = props.weather?.dt ? `${props.weather.dt}` : "Loading";
    return (
        <div className=" w-[90%] h-[auto]">
            <p className="text-[10px] sm:text-[15px] lg:text-[20px] 2xl:text-[30px]">{convertTimestampToDate(date)}</p>
            <h1 className="text-2xl sm:text-2xl md:text-3xl ">
                {cityName}
            </h1>
        </div>
    )
}