import { Section } from "@/layout/Section";
import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Gallery = () => {
  return (
    <Section
      title={
        "Ancient Olympia was initially named Altis (Αλτις), meaning holy forest (Ιερό δάσος)."
      }
      description={"It was build on the northern shore of the river Alfeios."}
    >
      <div className="mt-4 text-xl md:px-20">
        <p className="text-gray-600 text-md text-center sm:text-left">
          First inhabited in the second millennium BCE, the first archaeological
          record of dwellings dates from 1900 to 1600 BCE. The Kronion hill at
          the site was perhaps the first place of worship, dedicated to Kronos.
          However, other sacred buildings at the foot of the hill in the sacred
          grove of wild olive trees, or Altis, indicate other deities were
          worshipped such as Gaia, Themis, Aphrodite, and Pelops. With the
          descent of western Greek tribes into the Peloponnese, though, it was
          Zeus, father of the Olympian gods, who would become the dominant cult
          figure at Olympia.
        </p>
        {/* Gallery Showcase */}
        {/* <div className="mt-10 relative flex items-center justify-center h-[500px] w-full p-6 sm:w-full rounded-md">
          <Image
            src={"/assets/images/feature6.jpg"}
            fill={true}
            alt={"Image of Olympia ruins"}
            className="object-center"
          />
        </div>
        <h2 className="text-gray-800 text-2xl mt-5 mb-3">
          The Philippeion (Greek: Φιλιππεῖον)
        </h2>
        <p className="text-lg">
          In the Altis of Olympia was an Ionic circular memorial in limestone
          and marble, a tholos, which contained chryselephantine (ivory and
          gold) statues of Philip's family: himself, Alexander the Great,
          Olympias, Amyntas III and Eurydice I. It was made by the Athenian
          sculptor Leochares in celebration of Philip's victory at the battle of
          Chaeronea (338 BC). It was the only structure inside the Altis
          dedicated to a human.
        </p> */}
        <ImageComponent />
        {/* Sources */}
        <h2 className="text-gray-700 mt-5">Sources</h2>
        <Link
          href="https://www.worldhistory.org/Olympia/"
          className="text-sm text-black-300 text-center mt-1 flex"
        >
          https://www.worldhistory.org/Olympia/
        </Link>
        <Link
          href="https://en.wikipedia.org/wiki/Olympia,_Greece"
          className="text-sm text-black-300 text-center mt-1 flex"
        >
          https://en.wikipedia.org/wiki/Olympia,_Greece
        </Link>
      </div>
    </Section>
  );
};

export default Gallery;
