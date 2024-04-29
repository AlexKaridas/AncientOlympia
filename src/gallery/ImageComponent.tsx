import Image from "next/image";
const ImageComponent = () => {
  return (
    <>
      <div className="mt-10 relative flex items-center justify-center h-[500px] w-full p-6 sm:w-full rounded-md">
        <Image
          src={"/assets/images/feature6.jpg"}
          fill={true}
          alt={"Image of Olympia ruins"}
          className="object-center"
        />
      </div>
      <h2 className="text-gray-800 text-2xl mt-5 mb-3 text-center sm:text-left">
        The Philippeion (Greek: Φιλιππεῖον)
      </h2>
      <p className="text-lg text-center sm:text-left">
        In the Altis of Olympia was an Ionic circular memorial in limestone and
        marble, a tholos, which contained chryselephantine (ivory and gold)
        statues of Philip's family: himself, Alexander the Great, Olympias,
        Amyntas III and Eurydice I. It was made by the Athenian sculptor
        Leochares in celebration of Philip's victory at the battle of Chaeronea
        (338 BC). It was the only structure inside the Altis dedicated to a
        human.
      </p>
    </>
  );
};

export default ImageComponent;
