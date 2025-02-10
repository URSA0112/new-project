import { MiddleLogo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";

export default function Home() {

  return (
    <div>
   
      <SearchBar />
      <div className="flex">
        <LightLeft /> 
        <DarkRight />
      </div>
      
    </div>
  );
}