import React from "react";
import Image from "next/image";
import OptionButton from "./components/OptionButton";

const AddToCompost = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [size, setSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="flex h-screen w-96 flex-col my-8">
      <div className="flex justify-around m-2">
        <OptionButton
          name="small"
          weight={1}
          setSize={setSize}
          isSet={size === "5"}
        />
        <OptionButton
          name="medium"
          weight={2}
          setSize={setSize}
          isSet={size === "10"}
        />
        <OptionButton
          name="large"
          weight={3}
          setSize={setSize}
          isSet={size === "15"}
        />
      </div>
      <div className="flex justify-around w-full my-4 items-center">
        <div className="item w-32 text-center p-3 text-xl">Quantity</div>
        <div className="item w-32 text-center p-3 flex align-center">
          <button
            onClick={() => {
              setQuantity((prevState) => prevState - 1);
            }}
          >
            <Image
              className="m-auto"
              src="/minusFull.svg"
              alt="Minus Logo"
              width={25}
              height={25}
            />
          </button>
          <button className="px-2 py-4">{quantity}</button>
          <button
            onClick={() => {
              setQuantity((prevState) => prevState + 1);
            }}
          >
            <Image
              className="m-auto"
              src="/plus.svg"
              alt="Plus Logo"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-around w-full my-4">
        <div className="item h-32 text-center p-3 text-xl">
          Enter different weight
        </div>
        <div className="item w-32 h-32 text-center p-3">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="ex. 70kg"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSize("");
              setQuantity(0);
            }}
          />
        </div>
      </div>
      <div className="flex justify-around w-full my-4">
        <div className="item w-64 h-64 text-center p-3">
          <button className="rounded bg-green px-2 py-1 text-white w-48">
            {inputValue !== ""
              ? `Add ${inputValue} kg`
              : `Add ${Number(size) * quantity} kg`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCompost;
