import StudioHero from "@/components/sections/StudioHero";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import FutureApps from "@/components/sections/FutureApps";
import StudioMission from "@/components/sections/StudioMission";
import Footer from "@/components/sections/Footer";

export default function StudioHomePage() {
  return (
    <main>
      <StudioHero />
      <FeaturedProduct />
      <FutureApps />
      <StudioMission />
      <Footer />
    </main>
  );
}
