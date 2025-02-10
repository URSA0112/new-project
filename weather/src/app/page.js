

import { LightLeft } from "./components/LeftLayout";
import { MiddleLogo } from "./components/Logo";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar"

export default function Home() {

  return (
    <div >
<SearchBar></SearchBar>
      <div className="flex">
        <LightLeft />      
        <MiddleLogo></MiddleLogo>
        <DarkRight />
      </div>
    </div>
  );
}