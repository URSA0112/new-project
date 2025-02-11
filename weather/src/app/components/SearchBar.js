export function SearchBar() {
    return (
        <div className="z-[5] absolute ml-[50%] translate-x-[-50%] 
        w-[100px] h-[40px] sm:w-[250px] sm:h-[40px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px]
        mt-[4%]  bg-[rgba(255,255,255,0.6)] rounded-full">
            <input type="text" placeholder="Search" 
            className="w-[100px] h-[10px] sm:w-[250px] sm:h-[10px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px] 
            bg-transparent
            rounded-3xl p-5"  />
        </div>
    )
}   
// screens: {
//     xs: "300px", // Custom extra small screen (before sm)
//     sm: "640px", // Small (default)
//     md: "768px", // Medium
//     lg: "1024px", // Large
//     xl: "1280px", // Extra large
//   },