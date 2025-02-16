export function Circle() {
    return (
        <div className="absolute left-[50%] translate-x-[-50%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] border-[2px] border-blue-500 rounded-full flex items-center justify-center">

            {/* Middle Circle */}
            <div className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] border-[2px] border-purple-500 rounded-full flex items-center justify-center">

                {/* Inner Circle */}
                <div className="absolute w-[75px] h-[75px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] border-[2px] border-red-500 rounded-full">
                </div>
            </div>
        </div>
    )
}