import Image from "next/image";

const OptionButton: React.FC<{
  name: string;
  weight: number;
  setSize: (n: string) => void;
  isSet: boolean;
}> = ({ name, weight, setSize, isSet }) => {
  const imgSize = weight * 5;
  return (
    <div className="item w-32 h-32 text-center p-3">
      <button
        className={`px-1 py-3 border-1 min-h-[8rem] ${
          isSet ? " border-solid border-gray shadow-md" : ""
        }`}
        onClick={() => {
          setSize(String(imgSize));
        }}
      >
        <Image
          className="m-auto"
          src="/mediumBin.svg"
          alt="Bin Logo"
          width={imgSize * 3}
          height={imgSize}
        />
        <h1>{name}</h1>
        <h1>{`around ${imgSize}kg`}</h1>
      </button>
    </div>
  );
};

export default OptionButton;
