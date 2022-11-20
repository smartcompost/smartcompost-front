import Image from "next/image";
import { useRouter } from "next/router";

export type BinColors = "green" | "blue" | "yellow" | "black" | "brown" | '';

const Item: React.FC<{
  isCompostable: boolean;
  name: string;
  binColor: BinColors;
}> = ({ isCompostable, name, binColor }) => {
  const svgName = "/" + binColor + "Bin.svg";
  const router = useRouter();

  return (
    <li className="border-solid border-gray-100 border-b">
      <div className="flex justify-around my-4 items-center">
        <div className="min-w-[40%]">
          <p className="text-center">{name}</p>
        </div>
        <div className="flex justify-evenly min-w-[60%] items-center">
          {isCompostable ? (
            <>
              <Image src="/check.svg" alt="Bin Logo" width={25} height={25} />
              <button
                className="rounded bg-green px-2 py-1 text-white"
                onClick={() => {
                  router.push("/AddToCompost");
                }}
              >
                Compost
              </button>
            </>
          ) : (
            <>
              <Image src={svgName} alt="Bin Logo" width={25} height={25} />
              <p
                className={`max-w-[30%] text-center text-${binColor}`}
              >{`Into the ${binColor} bin`}</p>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default Item;
