import Image from "next/image";
import Header from "./components/Header";
import EarvanaHero from "./components/Hero";
import MaskingSection from "./components/MaskingSection";
import ListenSection from "./components/ListenSection";
import TryItSection from "./components/TryItSection";

export default function Home() {
  return (
    <div>
      <Header />
      <EarvanaHero />
      <MaskingSection></MaskingSection>
      <ListenSection></ListenSection>
      <TryItSection></TryItSection>
    </div>
  );
}
