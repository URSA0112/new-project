export function NightWeather(props) {

    function formatTime(timestamp, timezoneOffset) {
      
        const localTime = new Date((timestamp + timezoneOffset) * 1000);
        
        return localTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true, 
          timeZone: "UTC"
        });
      }

    const sunset = formatTime(props.weather?.sys?.sunset, props.weather?.timezone)
    const tempMin = props.weather?.main?.temp_min ? `${props.weather.main.temp_min}°C` : "Loading...";
    const weatherDescription = props.weather?.weather?.[0]?.description || "Loading...";
    const windSpeed = props.weather?.wind?.speed ? `${props.weather.wind.speed} m/s` : "Loading...";
    return (

        <div className="bg-transparent w-[80%] h-[auto] absolute top-[57%] pl-[10%]">
            <h1 className=" text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[50px] 
            text-5xl font-bold bg-gradient-to-r from-blue-100 via-purple-100 to-red-200 text-transparent bg-clip-text animate-pulse">{tempMin}</h1>
            <p className="text-[15px] sm:text-[20px] lg:text-[20px] 2xl:text-[40px]">{weatherDescription}</p>
            <p className="text-[12px] font-semibold flex items-center gap-2 ">
                <img src="sunset.png" className="w-3 h-3 invert opacity-90" ></img>
                <span >{`sunset : ${sunset}`}</span>
            </p>
            <p className="text-[14px] font-medium text-gray-200 flex items-center gap-2 ">
            <img src="wind.png" className="w-5 opacity-100" />
                <span className="text-blue-200">{windSpeed}</span>
            </p>

        </div>
    )
}