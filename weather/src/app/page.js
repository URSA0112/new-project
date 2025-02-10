

import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar"

export default function Home() {

  return (
    <div >
      <SearchBar></SearchBar>
      <div className="flex">
        <LightLeft/>
        <DarkRight />
      </div>
    </div>

  );
}