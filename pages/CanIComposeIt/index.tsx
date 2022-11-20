import React from "react";
import type { NextPage } from "next";
import Item, { BinColors } from "./components/Item";

type Items = {
  name: string;
  isCompostable: boolean;
  binColor: BinColors;
};

const listItems: Items[] = [
  {
    name: "Carrot Peel",
    isCompostable: false,
    binColor: "green",
  },
  {
    name: "Potato Peel",
    isCompostable: false,
    binColor: "blue",
  },
  {
    name: "Tomato Peel",
    isCompostable: false,
    binColor: "yellow",
  },
  {
    name: "Orange Peel",
    isCompostable: false,
    binColor: "black",
  },
  {
    name: "Compost",
    isCompostable: true,
    binColor: null,
  },
];

const CanIComposeIt: NextPage = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="flex h-screen w-96 flex-col">
      <div className="m-auto min-w-[20rem]">
        <h1 className="text-center my-6 text-3xl">Add to the compost</h1>

        <h5 className="text-sm">Find your waste?</h5>
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="ex. eggshells"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="min-h-[60%]">
        <ul>
          {listItems
            .filter((item) => {
              if (searchValue === "") {
                return null;
              } else if (
                item.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return item;
              }
            })
            .map(({ binColor, isCompostable, name }) => (
              <Item
                isCompostable={isCompostable}
                name={name}
                binColor={binColor}
                key={name}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CanIComposeIt;
