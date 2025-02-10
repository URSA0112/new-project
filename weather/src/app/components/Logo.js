


export function MiddleLogo() {
    return (
        <div className=" absolute left-[50%] transform -translate-x-1/2  flex justify-center self-center ">
            <div className="w-[100px] h-[180px] bg-pink-400 relative justify-self-center self-center" >
                <div className="bg-[#0F141E] absolute bottom-[22%] right-[-5px] w-[50px] h-[100px] "></div>
                <div className=" w-[50px] h-[50px] absolute right-0 bg-[#0F141E] rounded-bl-full "></div>
                <div id="logo-circle" className="bg-white w-[105px] h-[105px] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-3 ">
                    <img src="logo-2.png" className="h-[50px] w-auto"></img>
                    <img src="logo-1.png" className="h-[50px] w-auto"></img>
                </div>
                <div className=" w-[50px] h-[50px] absolute right-0 bottom-0 bg-[#0F141E] rounded-tl-full "></div>
            </div>
        </div>
    )
}