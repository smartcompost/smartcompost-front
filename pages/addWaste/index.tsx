import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Tags from '../../components/Tags'; 
import { MultiSelect } from "react-multi-select-component";


interface Tag {
  id: string;
  text: string;
}

interface TagFromApi {
  id: string; 
  name: string;
}

interface WasteUnitFromApi {
  id: number;
  name: string;
  volume: string;
  volume_rate: string;
  volume_unit_name: string;
}

interface WasteUnit {
  label: string;
  value: string;
}

const inputStyles = 'w-full border-2 border-gray-400 bg-gray-100 focus:border-black rounded p-4 placeholder:text-gray-400 focus:outline-none';
const containerStyle = 'flex justify-between items-center my-4';

const AddWastePage: NextPage = () => {
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const [name, setName] = useState<string>('');
  const [density, setDensity] = useState<number | null>();
  const [ph, setPh] = useState<number | null>();
  const [description, setDescription] = useState<string>('');

  const [availableUnits, setAvailableUnits] = useState<WasteUnit[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<WasteUnit[]>([]);

  const [error, setError] = useState<Boolean | null>(null);

  const fetchAvailableTags = async () => {
    const response = await fetch(`http://10.250.194.26:8000/api/tags/`);
    const newData = await response.json();
    setAvailableTags(newData.results.map((tag: TagFromApi) => ({ ...tag, id: tag.id.toString(), text: tag.name })));
  };

  const fetchAvailableUnits = async () => {
    const response = await fetch(`http://10.250.194.26:8000/api/waste-units/`);
    const newData = await response.json();
    setAvailableUnits(newData.results.map((unit: WasteUnitFromApi) => ({ label: `${unit.name} (${+(unit.volume)} ${unit.volume_unit_name})`, value: unit.id })));
  };

  const submitWaste = async () => {
    const body = {
      name,
      description,
      ph,
      density,
      tags: selectedTags.map(tag => parseInt(tag.id)),
      available_units: selectedUnits.map(unit => unit.value),
    };

    fetch("http://10.250.194.26:8000/api/wastes/", {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    }).then((res) => setError(res.status === 201));
  };

  useEffect(() => {
    fetchAvailableTags();
    fetchAvailableUnits();
  }, []);

  if (!availableTags || !availableUnits) return null;

  return (
    <section className="flex-1 w-3/4 mx-auto">
      <h1 className="text-2xl my-4">Add new waste type</h1>
      <input
          type="text"
          placeholder="Name"
          className={inputStyles}
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      <Tags suggestions={availableTags} tags={selectedTags} setTags={setSelectedTags} />
      <div className={containerStyle}>
        Density
        <input
            type="number"
            placeholder='kg/m³'
            className={`${inputStyles} w-1/2`}
            value={density === null ? '' : density}
            onChange={(e) => setDensity(parseInt(e.target.value))}
        />
      </div>
      <div className={containerStyle}>
        pH
        <input
            type="number"
            className={`${inputStyles} w-1/2`}
            placeholder="0-14"
            value={ph === null ? '' : ph}
            onChange={(e) => setPh(parseInt(e.target.value))}
        />
      </div>
      <input
          type="text"
          placeholder="Short description"
          className={inputStyles}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
      />
      <div className={containerStyle}>
        <MultiSelect
          options={availableUnits}
          onChange={setSelectedUnits}
          value={selectedUnits}
          labelledBy="Select"
        />
      </div>
      <div className={containerStyle}>
        <button
          onClick={submitWaste}
          className="bg-green w-full p-4 text-white hover:bg-green-500 transition-colors"
        >
          Submit
        </button>
      </div>
      {error ? (
        <div className={containerStyle}>
          <p className="text-green">
            Waste added successfuly!
          </p>
      </div>
      ) : null}
      {error === false ? (
        <div className={containerStyle}>
          <p className="text-[red]">
            Error has occured while adding a new waste!
          </p>
      </div>
      ) : null}
    </section>
  )
};

export default AddWastePage;
