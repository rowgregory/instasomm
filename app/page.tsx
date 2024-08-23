import Banner from "./components/common/Banner";
import WinePHD from "./components/home/WinePHD";
import InfoPanelOne from "./components/home/InfoPanelOne";
import TheIdea from "./components/home/TheIdea";
import TheHistory from "./components/home/TheHistory";
import TripToFrance from "./components/home/TripToFrance";
import PairingSystem from "./components/home/PairingSystem";
import Cheese from "./components/home/Cheese";
import FadeDivider from "./components/common/FadeDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      <Banner
        src="/videos/home.mp4"
        text1="Discover Your Perfect"
        text2="A Sommelier in your pocket™"
        text3="Discover the perfect wine pairings anytime, anywhere."
      />
      <FadeDivider />
      <WinePHD />
      <InfoPanelOne />
      <TheIdea />
      <TheHistory />
      <TripToFrance />
      <PairingSystem />
      <Cheese />
    </div>
  );
}
