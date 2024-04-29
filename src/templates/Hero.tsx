import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import Image from "next/image";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl={false} />}>
        <li>
          <Link href="https://github.com/AlexKaridas">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"Ancient Olympia: \n"}
            <span>Birthplace of the Olympic Games</span>
          </>
        }
        description="Explore the history, culture, and legacy of this legendary site."
      />
      <div className="relative object-cover h-96 w-full">
        <Image
          src={
            "https://www.greeka.com/photos/peloponnese/olympia/about/hero/olympia-about-1280.jpg"
          }
          fill={true}
          alt={"Picture of ancient Olympia"}
          className="object-cover"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
