import className from "classnames";
import { useRouter } from "next/router";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:text-left sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-md text-gray-800">{props.title}</h3>
        <div className="mt-6 text-lg leading-8">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2 rounded-md">
        <img
          className="rounded-md"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
