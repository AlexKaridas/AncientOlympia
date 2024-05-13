import { Meteors } from "@/meteorCard/MeteorCard";
import Image from "next/image";

type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="relative shadow-xl flex sm:h-[200px] w-full overflow-hidden flex-col items-center gap-5 rounded-md bg-gray-900 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <Meteors number={15} />
    <div className="w-16 h-16 sm:w-28 sm:h-16 relative sm:mr-7">
      <Image
        src={"/assets/images/helmet.png"}
        alt={"Ancient greek helmet"}
        fill={true}
      />
    </div>
    <div className="font-medium">
      <div className="text-gray-300 text-md sm:text-lg">{props.title}</div>
      <div className="text-primary-600 text-md sm:text-lg">
        {props.subtitle && props.subtitle}
      </div>
    </div>
  </div>
);

export { CTABanner };
