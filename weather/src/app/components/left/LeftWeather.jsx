export function DayWeather(props) {


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
      
    const sunrise = formatTime(props.weather?.sys?.sunrise, props.weather?.timezone)
    const tempMax = props.weather?.main?.temp_max ? `${props.weather.main.temp_max}°C` : "Loading...";
    const weatherDescription = props.weather?.weather?.[0]?.description || "Loading...";
    const windSpeed = props.weather?.wind?.speed ? `${props.weather.wind.speed} m/s` : "Loading...";
    return (

        <div className="bg-transparent w-[80%] h-[auto] absolute top-[57%] pl-[10%]">
            <h1 className=" text-[25px] sm:text-[30px] lg:text-[35px] xl:text-[50px] text-5xl font-bold bg-gradient-to-r from-slate-300 via-amber-500 to-slate-300 text-transparent bg-clip-text animate-pulse">
                {tempMax}</h1>
            <p className="text-[15px] sm:text-[20px] lg:text-[20px] 2xl:text-[40px] animate-fade">{weatherDescription}</p>
            <p className="text-[12px] font-semibold flex items-center gap-2">
            <img src="sunrise.png" className="w-4 h-4 " ></img>
                <span >{`sunrise : ${sunrise}`}</span>
            </p>
            <p className="text-[14px] font-medium text-gray-200 flex items-center gap-2 ">
                <img src="windy.png" className="w-5" />
                <span className="text-blue-900">{`${windSpeed}`}</span>
            </p>

        </div>
    )
}