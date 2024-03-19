import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Features from "./Components/Features/Features";
import NewsLetter from "./Components/NewsLetter";
import TeamView from "./Components/TeamPart/TeamView";
import Logos from "./Components/Logos";
import Description from "./Components/Description";
import RoadMap from "./Components/RoadMap";
import Circle from "./Components/Circle";
import WhyObinex from "./Components/WhyObinex";
import Future from "./Components/Future";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Features/>
      <Future/>
      <WhyObinex/>
      <RoadMap/>
      <Description/>
      <Circle/>
      <Logos/>
      <NewsLetter/>
      <TeamView/>
      <Footer/>
    </main>
  );
}
