import {LightLeft} from "./components/left"
import {DarkRight} from "./components/right"

export default function Home() {
  return (
    <div className="flex">
      <LightLeft></LightLeft>
      <DarkRight></DarkRight>
    </div>
  );
}
