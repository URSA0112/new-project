export function SearchBar(props) {
    return (
        <div className="z-[5] absolute ml-[50%] translate-x-[-50%] 
        w-[100px] h-[40px] sm:w-[250px] sm:h-[40px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px]
        mt-[4%]  bg-[rgba(255,255,255,0.6)] rounded-full">
            <input value={props.inputText} onChange={props.handleChange}
            type="text" placeholder="Search"

            className="w-[100px] h-[10px] sm:w-[250px] sm:h-[10px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px] 
            bg-transparent
            rounded-3xl p-5"  />
        </div>
    )
}   
