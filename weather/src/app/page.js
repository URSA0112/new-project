import { LightLeft } from "./components/LeftLayout";
import { DarkRight } from "./components/RightLayout";
import { SearchBar } from "./components/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar></SearchBar>
      <div className="flex min-w-[470px] min-h-[300px]">
        <LightLeft />
        <DarkRight />
      </div>
    </div>
  );
}
