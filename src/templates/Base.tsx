import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import Gallery from "@/gallery/Gallery";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner
      title={
        "Sporting events were originally associated with funeral rituals, for example, the funeral games instigated by Achilles in honour of Patroklos in Homer's Iliad."
      }
      subtitle={
        "The first olympic games were held in 776 bce at the first full moon after the summer solstice."
      }
    />
    <Gallery />
    <Footer />
  </div>
);

export { Base };
