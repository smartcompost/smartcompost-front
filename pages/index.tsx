import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-96 flex-col my-8">
      <div className="flex m-5">
        <h1 className="text-xl">Hello John!</h1>
      </div>
      <div className="flex justify-around w-full my-4 items-center">
        <div className="item w-48 text-center p-3 text-md">
          Waste composted (since January 2022)
        </div>

        <div className="item w-24 text-center p-3 text-3xl font-bold">
          23,4kg
        </div>
      </div>
      <div className="flex justify-around w-full my-4 items-center">
        <div className="item w-32 text-center text-md">
          <Image
            className="m-auto"
            src="/compost.svg"
            alt="Compost Logo"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className="item w-32 text-center p-1">
          <p className="text-sm">Yearly goal</p>
          <p className="text-lg font-bold">50kg</p>
          <p className="text-sm">You’ve reached</p>
          <p className="tex-lg font-bold">46%</p>
          <p className="text-sm">of your yearly goal</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
