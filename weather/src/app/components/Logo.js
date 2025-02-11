export function Logo(){
    return(
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

            <div className="bg-[var(--bgDark-color)] w-[60px] h-[60px] rounded-tl-[60%] lg:w-[70px] lg:h-[80px]"> </div>
            
        </div>

    )
}