


export function MiddleLogo() {
    return (
        <div className=" absolute left-[50%] transform -translate-x-1/2  flex justify-center self-center z-[1] w-[30%] h-[30%]">
            <div className="w-[40%] h-[70%] bg-pink-400 relative justify-self-center self-center" >
                <div className="bg-[#0F141E] absolute bottom-[0%] right-[-20%] w-[50%] h-[100%] "></div>
                <div className=" w-[50%] h-[40%] absolute right-0 bg-[#0F141E] rounded-bl-full "></div>
                <div id="logo-circle" className="bg-white w-[50%] h-[50%] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[6%] z-[2]">
                    <img src="logo-2.png" className="h-[50%] w-auto"></img>
                    <img src="logo-1.png" className="h-[50%] w-auto"></img>
                </div>
                <div className=" w-[50%] h-[40%] absolute right-0 bottom-0 bg-[#0F141E] rounded-tl-full "></div>
            </div>
        </div>
    )
}