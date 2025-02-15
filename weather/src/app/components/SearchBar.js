export function SearchBar(props) {

    return (
        <div className="z-[5] absolute ml-[25%] translate-x-[-50%] 
        w-[200px] h-[40px] sm:w-[250px] sm:h-[40px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px]
        mt-[4%]  bg-[rgba(246,110,110,0.6)] rounded-full">
            <input value={props.inputText} onChange={props.onChangeInput}
            type="text" placeholder="Search"

            className="w-[200px] h-[10px] sm:w-[250px] sm:h-[10px] md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[50px] 
            bg-transparent
            rounded-3xl p-5" />
         
            <ul className="bg-pink-100 h-[auto] rounded-2xl ">{props.locationList}</ul>
            
        </div>
    )
}   
