import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="About Ancient Olympia"
    description="Nestled in the western Peloponnese peninsula of Greece, Ancient Olympia holds immense significance as the birthplace of the Olympic Games. This sacred site, dedicated to Zeus, the king of the Greek gods, had a massive Statue of Zeus, which had been ranked as one of the Seven Wonders of the World. It witnessed the pinnacle of athletic prowess and religious fervor for over 1,000 years."
  >
    <VerticalFeatureRow
      title="Enduring Legacy"
      description="The Olympic Games, held in Olympia every four years, flourished for over a millennium, from 776 BC to 393 AD. These games were a celebration of physical prowess and were dedicated to the god Zeus. Events included running, jumping, throwing, and combat sports. The Olympics were a unifying force for the Greek city-states and helped to promote peace during the games."
      image="/assets/images/feature5.jpg"
      imageAlt="_Ancient Stadium in Olympia"
    />
    <VerticalFeatureRow
      title="Statue of Zeus"
      description="Statue of Zeus, at Olympia, Greece, one of the Seven Wonders of the World. The statue was one of two masterpieces by the Greek sculptor Phidias (the other being the statue of Athena in the Parthenon) and was placed in the huge Temple of Zeus at Olympia in western Greece. The statue, almost 12 m (40 feet) high and plated with gold and ivory, represented the god sitting on an elaborate cedarwood throne ornamented with ebony, ivory, gold, and precious stones. On his outstretched right hand was a statue of Nike (Victory), and in the god’s left hand was a sceptre on which an eagle was perched. The statue, which took eight years to construct, was noted for the divine majesty and goodness it expressed. The discovery in the 1950s of the remains of Phidias’ workshop at Olympia confirmed the statue’s date of about 430 BCE. The temple was destroyed in 426 CE, and the statue, of which no accurate copies survive, may have been destroyed then or in a fire at Constantinople (now Istanbul) about 50 years later."
      image="/assets/images/feature2.jpg"
      imageAlt="_Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Visiting the Museum"
      description="The glory of the Temple of Zeus may be diminished by time, but the Archaeological Museum of Olympia offers a chance to delve deeper into its history and artistry. Here, visitors can encounter fragments of the temple's sculptures, showcasing the intricate details and craftsmanship that once adorned the building. These pieces, along with other artifacts unearthed at Olympia, provide a window into the religious significance and artistic achievements of the ancient world."
      image="/assets/images/feature3.jpg"
      imageAlt="_Statue inside the museum of olympia"
    />
    <VerticalFeatureRow
      title="The stadium of Olympia"
      description="The stadium at the archaeological site of Olympia, Greece, is located to the east of the sanctuary of Zeus. It was the location of many of the sporting events at the Ancient Olympic Games. The physical landmarks of the stadium are 212.54 m (697.3 ft) long and 30–34 m (98–112 ft) wide, and it served mainly for running races that determined the fastest person in the world. The track was made of hard-packed clay to serve as traction for the contestants in the running events. As in current day athletics, a white block was placed on one end of the track where the athletes would line up to place their feet and got ready to start of the race. The white block was used to align all the athletes so they would all run the same distance."
      image="/assets/images/feature4.webp"
      imageAlt="_Statue inside the museum of olympia"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
