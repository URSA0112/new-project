export function Logo() {
    return (
        <div className="grid gap-10 absolute left-0 bg-[var(--bgWhite-color)] h-[160px] 
        lg:h-[200px] lg:gap-[44%]">

            <div className="bg-[var(--bgDark-color)] w-[60px] h-[60px] rounded-bl-[65%] lg:w-[70px] lg:h-[70px]"> </div>

            <div className="bg-[var(--bgDark-color)] absolute right-0 top-[25%] w-[40px] h-[80px] 
            lg:absolute lg:top-[50%] lg:translate-y-[-40%] lg:h-[140px]">
                <div id="circle-logo" className="absolute left-[-50%] top-1/2 transform -translate-y-1/2 ">
                    <div id="logo-circle" className="bg-white 
                    w-[65px] h-[65px] 
                    lg:w-[100px] lg:h-[100px]
                    rounded-full 
                    absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    flex justify-center items-center gap-[6%] z-[2]">
                        <img src="logo-2.png" className="h-[50%] w-auto"></img>
                        <img src="logo-1.png" className="h-[50%] w-auto"></img>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bgDark-color)] w-[60px] h-[60px] rounded-tl-[60%] lg:w-[70px] lg:h-[80px]"> 
            </div> 
             {/* bigcircle */}
            <div className="absolute top-[-28%] sm:top-[-75%] md:top-[-140%] lg:top-[-145%] xl:top-[-199%] translate-x-[-50%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] border-[0.8px] border-blue-500 rounded-full flex items-center justify-center">

                {/* Middle Circle */}
                <div className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] border-[0.7px] border-purple-500 rounded-full flex items-center justify-center">

                    {/* Inner Circle */}
                    <div className="absolute w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] border-[0.5px] border-red-500 rounded-full">
                    </div>
                </div>
            </div>
           
        </div>

    )
}