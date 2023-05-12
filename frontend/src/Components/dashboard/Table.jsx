import React from "react";
import "../../index.css";
export default function Table() {
  const data = [
    {
      id: 502,
      partName: "Fuselage",
      composition: "Aluminum",
      age: "47",
      condition: "New",
      manufacturer: "Bombardier",
      useCases: "Furniture",
      aircraftModel: "E175",
      location: "Asia",
      carbonSaved: 59,
      waterSaved: 5113,
      landfillWasteSaved: 92,
      energySaved: 3066,
      recyclingRate: 0,
    },
    {
      id: 503,
      partName: "Fuselage",
      composition: "Aluminum",
      age: "8",
      condition: "New",
      manufacturer: "Embraer",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "North America",
      carbonSaved: 301,
      waterSaved: 2375,
      landfillWasteSaved: 780,
      energySaved: 4415,
      recyclingRate: 0,
    },
    {
      id: 504,
      partName: "Engine",
      composition: "Composite",
      age: "14",
      condition: "Used",
      manufacturer: "Bombardier",
      useCases: "Furniture",
      aircraftModel: "A320",
      location: "North America",
      carbonSaved: 778,
      waterSaved: 6015,
      landfillWasteSaved: 61,
      energySaved: 774,
      recyclingRate: 0,
    },
    {
      id: 505,
      partName: "Avionics",
      composition: "Composite",
      age: "1",
      condition: "New",
      manufacturer: "Gulfstream",
      useCases: "Art Installations",
      aircraftModel: "G650",
      location: "South America",
      carbonSaved: 91,
      waterSaved: 1763,
      landfillWasteSaved: 333,
      energySaved: 3383,
      recyclingRate: 0,
    },
    {
      id: 506,
      partName: "Avionics",
      composition: "Titanium",
      age: "26",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Building Materials",
      aircraftModel: "E175",
      location: "Africa",
      carbonSaved: 155,
      waterSaved: 827,
      landfillWasteSaved: 806,
      energySaved: 999,
      recyclingRate: 0,
    },
    {
      id: 507,
      partName: "Fuselage",
      composition: "Titanium",
      age: "41",
      condition: "New",
      manufacturer: "Bombardier",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "North America",
      carbonSaved: 655,
      waterSaved: 1574,
      landfillWasteSaved: 699,
      energySaved: 1904,
      recyclingRate: 0,
    },
    {
      id: 508,
      partName: "Landing Gear",
      composition: "Composite",
      age: "33",
      condition: "New",
      manufacturer: "Embraer",
      useCases: "Art Installations",
      aircraftModel: "E175",
      location: "Africa",
      carbonSaved: 327,
      waterSaved: 4450,
      landfillWasteSaved: 800,
      energySaved: 4561,
      recyclingRate: 0,
    },
    {
      id: 509,
      partName: "Wing",
      composition: "Titanium",
      age: "35",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "Africa",
      carbonSaved: 733,
      waterSaved: 6356,
      landfillWasteSaved: 704,
      energySaved: 2343,
      recyclingRate: 0,
    },
    {
      id: 510,
      partName: "Avionics",
      composition: "Composite",
      age: "25",
      condition: "Used",
      manufacturer: "Gulfstream",
      useCases: "Aircraft Maintenance",
      aircraftModel: "CRJ900",
      location: "North America",
      carbonSaved: 225,
      waterSaved: 6099,
      landfillWasteSaved: 452,
      energySaved: 1291,
      recyclingRate: 0,
    },
    {
      id: 511,
      partName: "Fuselage",
      composition: "Composite",
      age: "46",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Art Installations",
      aircraftModel: "737",
      location: "South America",
      carbonSaved: 110,
      waterSaved: 7971,
      landfillWasteSaved: 649,
      energySaved: 964,
      recyclingRate: 0,
    },
    {
      id: 512,
      partName: "Wing",
      composition: "Steel",
      age: "48",
      condition: "New",
      manufacturer: "Airbus",
      useCases: "Art Installations",
      aircraftModel: "CRJ900",
      location: "Australia",
      carbonSaved: 250,
      waterSaved: 1158,
      landfillWasteSaved: 492,
      energySaved: 750,
      recyclingRate: 0,
    },
    {
      id: 513,
      partName: "Avionics",
      composition: "Steel",
      age: "48",
      condition: "Used",
      manufacturer: "Bombardier",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "Europe",
      carbonSaved: 365,
      waterSaved: 6512,
      landfillWasteSaved: 556,
      energySaved: 3991,
      recyclingRate: 0,
    },
    {
      id: 514,
      partName: "Fuselage",
      composition: "Composite",
      age: "35",
      condition: "New",
      manufacturer: "Embraer",
      useCases: "Furniture",
      aircraftModel: "G650",
      location: "Australia",
      carbonSaved: 332,
      waterSaved: 1785,
      landfillWasteSaved: 124,
      energySaved: 806,
      recyclingRate: 0,
    },
    {
      id: 515,
      partName: "Avionics",
      composition: "Steel",
      age: "39",
      condition: "Used",
      manufacturer: "Gulfstream",
      useCases: "Aircraft Maintenance",
      aircraftModel: "G650",
      location: "South America",
      carbonSaved: 441,
      waterSaved: 3784,
      landfillWasteSaved: 805,
      energySaved: 2750,
      recyclingRate: 0,
    },
    {
      id: 516,
      partName: "Fuselage",
      composition: "Steel",
      age: "13",
      condition: "New",
      manufacturer: "Gulfstream",
      useCases: "Building Materials",
      aircraftModel: "E175",
      location: "Africa",
      carbonSaved: 472,
      waterSaved: 3711,
      landfillWasteSaved: 706,
      energySaved: 2711,
      recyclingRate: 0,
    },
    {
      id: 517,
      partName: "Engine",
      composition: "Titanium",
      age: "11",
      condition: "New",
      manufacturer: "Gulfstream",
      useCases: "Building Materials",
      aircraftModel: "CRJ900",
      location: "Africa",
      carbonSaved: 695,
      waterSaved: 550,
      landfillWasteSaved: 882,
      energySaved: 3224,
      recyclingRate: 0,
    },
    {
      id: 518,
      partName: "Fuselage",
      composition: "Titanium",
      age: "35",
      condition: "New",
      manufacturer: "Cessna",
      useCases: "Building Materials",
      aircraftModel: "A320",
      location: "Asia",
      carbonSaved: 332,
      waterSaved: 3267,
      landfillWasteSaved: 682,
      energySaved: 376,
      recyclingRate: 0,
    },
    {
      id: 519,
      partName: "Avionics",
      composition: "Composite",
      age: "41",
      condition: "New",
      manufacturer: "Bombardier",
      useCases: "Furniture",
      aircraftModel: "CRJ900",
      location: "Africa",
      carbonSaved: 468,
      waterSaved: 7108,
      landfillWasteSaved: 52,
      energySaved: 2790,
      recyclingRate: 0,
    },
    {
      id: 520,
      partName: "Avionics",
      composition: "Aluminum",
      age: "12",
      condition: "Used",
      manufacturer: "Gulfstream",
      useCases: "Art Installations",
      aircraftModel: "CRJ900",
      location: "South America",
      carbonSaved: 253,
      waterSaved: 4832,
      landfillWasteSaved: 209,
      energySaved: 4471,
      recyclingRate: 0,
    },
    {
      id: 521,
      partName: "Fuselage",
      composition: "Steel",
      age: "16",
      condition: "Used",
      manufacturer: "Gulfstream",
      useCases: "Building Materials",
      aircraftModel: "CRJ900",
      location: "Europe",
      carbonSaved: 590,
      waterSaved: 9173,
      landfillWasteSaved: 418,
      energySaved: 3109,
      recyclingRate: 0,
    },
  ];
  console.log(data[0]);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-20-04-2023.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {/* <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="checkbox" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Part Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Material Composition
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Age(Years)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Condition
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Manufacturer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Aircraft Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    Know More...
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 h-[100%]">
                {data.map((item, index) => {
                  console.log(index);
                  if (index <= 10) {
                    return (
                      <tr>
                        {/* <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td> */}
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                          {item.partName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {item.composition}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {item.age}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p
                            className="text-green-500 hover:text-green-700"
                            
                          >
                            {item.condition}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p
                            className="text-red-500 hover:text-red-700"
                          >
                            {item.location}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p
                            className="text-red-500 hover:text-red-700"
                          >
                            {item.manufacturer}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p
                            className="text-red-500 hover:text-red-700"
                          >
                            {item.aircraftModel}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap p-2 ">
                          <button className="p-4 my-2 rounded-[10px] bg-green-500 text-white button-effect   w-auto h-auto">
                            More Info
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
