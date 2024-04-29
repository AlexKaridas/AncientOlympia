import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <Section>
    <CTABanner title={title} subtitle={subtitle && subtitle} />
  </Section>
);

export { Banner };
