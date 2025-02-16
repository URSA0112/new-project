export function SearchBar(props) {

    return (
        <div className="z-[5] absolute ml-[50%] translate-x-[-50%] 
        w-[200px] h-[40px] sm:w-[250px] sm:h-[40px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px]
        mt-[4%] bg-white  rounded-full">
            <img src="search.png" className="w-[30px] mt-[3%] ml-3 absolute"></img>
            <input value={props.inputText} onChange={props.onChangeInput}
            type="text" placeholder="Search..."
            className="w-[200px] h-[10px] sm:w-[250px] sm:h-[10px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px] 
            bg-transparent
            rounded-3xl p-5 ml-10 border-none focus:outline-none
         " />
         
            <ul className="bg-[var(--day-color)] h-[auto] rounded-2xl ">{props.locationList}</ul>
            
        </div>
    )
}   
