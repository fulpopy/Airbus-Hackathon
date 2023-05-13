import React from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
export default function Table() {
  const navigate = useNavigate();
  const handleButton = (id) => {
    console.log(id);
    // navigate("/partInfo", { state: data });
  };
  const data = [
    {
      id: 2,
      partName: "Landing Gear",
      composition: "Aluminum",
      age: "21",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Furniture",
      aircraftModel: "737",
      location: "Australia",
      carbonSaved: 902,
      waterSaved: 2454,
      landfillWasteSaved: 827,
      energySaved: 1398,
      recyclingRate: 67.29233298,
      newPartCarbonFoot: 939,
      recycledPartCarbonFoot: 37,
      waterUsageNewPart: 2880,
      waterUsageRecycledPart: 426,
      landfillWasteNewPart: 926,
      landfillWasteRecycledPart: 99,
      energyConsumptionNewPart: 1864,
      energyConsumptionRecycledPart: 466,
      toxicityNewPart: 5.659504464,
      toxicityRecycledPart: 3.94044877,
      remanufacturingPotential: 0.294817729,
      lifeCycleAssessment: 34.19016329,
      renewableMaterial: 28.55222593,
      toxicityScoreDiff: 1.719055694,
    },
    {
      id: 3,
      partName: "Engine",
      composition: "Aluminum",
      age: "42",
      condition: "New",
      manufacturer: "Boeing",
      useCases: "Furniture",
      aircraftModel: "Citation X",
      location: "North America",
      carbonSaved: 418,
      waterSaved: 9687,
      landfillWasteSaved: 187,
      energySaved: 520,
      recyclingRate: 83.53422696,
      newPartCarbonFoot: 527,
      recycledPartCarbonFoot: 109,
      waterUsageNewPart: 9984,
      waterUsageRecycledPart: 297,
      landfillWasteNewPart: 374,
      landfillWasteRecycledPart: 187,
      energyConsumptionNewPart: 636,
      energyConsumptionRecycledPart: 116,
      toxicityNewPart: 2.290754381,
      toxicityRecycledPart: 3.934293117,
      remanufacturingPotential: 0.236313346,
      lifeCycleAssessment: 26.12860845,
      renewableMaterial: 50.7357268,
      toxicityScoreDiff: -1.643538736,
    },
    {
      id: 4,
      partName: "Avionics",
      composition: "Titanium",
      age: "11",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Art Installations",
      aircraftModel: "Citation X",
      location: "Africa",
      carbonSaved: 291,
      waterSaved: 2940,
      landfillWasteSaved: 189,
      energySaved: 1308,
      recyclingRate: 50.89648382,
      newPartCarbonFoot: 337,
      recycledPartCarbonFoot: 46,
      waterUsageNewPart: 3902,
      waterUsageRecycledPart: 962,
      landfillWasteNewPart: 306,
      landfillWasteRecycledPart: 117,
      energyConsumptionNewPart: 1763,
      energyConsumptionRecycledPart: 455,
      toxicityNewPart: 9.446200564,
      toxicityRecycledPart: 4.340929879,
      remanufacturingPotential: 0.148533956,
      lifeCycleAssessment: 12.8530375,
      renewableMaterial: 85.99782555,
      toxicityScoreDiff: 5.105270684,
    },
    {
      id: 5,
      partName: "Avionics",
      composition: "Steel",
      age: "48",
      condition: "Used",
      manufacturer: "Embraer",
      useCases: "Building Materials",
      aircraftModel: "737",
      location: "Africa",
      carbonSaved: 399,
      waterSaved: 5115,
      landfillWasteSaved: 803,
      energySaved: 1505,
      recyclingRate: 83.05698201,
      newPartCarbonFoot: 480,
      recycledPartCarbonFoot: 81,
      waterUsageNewPart: 6010,
      waterUsageRecycledPart: 895,
      landfillWasteNewPart: 990,
      landfillWasteRecycledPart: 187,
      energyConsumptionNewPart: 1989,
      energyConsumptionRecycledPart: 484,
      toxicityNewPart: 3.471216809,
      toxicityRecycledPart: 2.397874692,
      remanufacturingPotential: 0.398985134,
      lifeCycleAssessment: 34.96474455,
      renewableMaterial: 35.71235851,
      toxicityScoreDiff: 1.073342117,
    },
    {
      id: 6,
      partName: "Engine",
      composition: "Steel",
      age: "7",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Aircraft Maintenance",
      aircraftModel: "737",
      location: "South America",
      carbonSaved: 270,
      waterSaved: 5478,
      landfillWasteSaved: 669,
      energySaved: 3518,
      recyclingRate: 64.34217202,
      newPartCarbonFoot: 379,
      recycledPartCarbonFoot: 109,
      waterUsageNewPart: 6326,
      waterUsageRecycledPart: 848,
      landfillWasteNewPart: 787,
      landfillWasteRecycledPart: 118,
      energyConsumptionNewPart: 3651,
      energyConsumptionRecycledPart: 133,
      toxicityNewPart: 4.808954366,
      toxicityRecycledPart: 3.593076594,
      remanufacturingPotential: 0.815403538,
      lifeCycleAssessment: 47.17494051,
      renewableMaterial: 64.94716914,
      toxicityScoreDiff: 1.215877773,
    },
    {
      id: 7,
      partName: "Landing Gear",
      composition: "Aluminum",
      age: "9",
      condition: "Used",
      manufacturer: "Bombardier",
      useCases: "Automotive Components",
      aircraftModel: "Citation X",
      location: "Europe",
      carbonSaved: 481,
      waterSaved: 1910,
      landfillWasteSaved: 248,
      energySaved: 1190,
      recyclingRate: 57.56489155,
      newPartCarbonFoot: 648,
      recycledPartCarbonFoot: 167,
      waterUsageNewPart: 2719,
      waterUsageRecycledPart: 809,
      landfillWasteNewPart: 290,
      landfillWasteRecycledPart: 42,
      energyConsumptionNewPart: 1381,
      energyConsumptionRecycledPart: 191,
      toxicityNewPart: 8.610588649,
      toxicityRecycledPart: 3.409724585,
      remanufacturingPotential: 0.613621628,
      lifeCycleAssessment: 98.12751296,
      renewableMaterial: 39.03923846,
      toxicityScoreDiff: 5.200864065,
    },
    {
      id: 8,
      partName: "Engine",
      composition: "Aluminum",
      age: "26",
      condition: "New",
      manufacturer: "Bombardier",
      useCases: "Automotive Components",
      aircraftModel: "737",
      location: "Australia",
      carbonSaved: 752,
      waterSaved: 4657,
      landfillWasteSaved: 574,
      energySaved: 4064,
      recyclingRate: 62.36111641,
      newPartCarbonFoot: 944,
      recycledPartCarbonFoot: 192,
      waterUsageNewPart: 5048,
      waterUsageRecycledPart: 391,
      landfillWasteNewPart: 652,
      landfillWasteRecycledPart: 78,
      energyConsumptionNewPart: 4183,
      energyConsumptionRecycledPart: 119,
      toxicityNewPart: 3.145238448,
      toxicityRecycledPart: 4.887436622,
      remanufacturingPotential: 0.222008823,
      lifeCycleAssessment: 2.310089052,
      renewableMaterial: 77.66644793,
      toxicityScoreDiff: -1.742198174,
    },
    {
      id: 9,
      partName: "Landing Gear",
      composition: "Titanium",
      age: "3",
      condition: "New",
      manufacturer: "Cessna",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "Australia",
      carbonSaved: 906,
      waterSaved: 6949,
      landfillWasteSaved: 153,
      energySaved: 2583,
      recyclingRate: 55.04313389,
      newPartCarbonFoot: 940,
      recycledPartCarbonFoot: 34,
      waterUsageNewPart: 7560,
      waterUsageRecycledPart: 611,
      landfillWasteNewPart: 246,
      landfillWasteRecycledPart: 93,
      energyConsumptionNewPart: 3000,
      energyConsumptionRecycledPart: 417,
      toxicityNewPart: 6.890005828,
      toxicityRecycledPart: 3.279904313,
      remanufacturingPotential: 0.989184791,
      lifeCycleAssessment: 16.0467517,
      renewableMaterial: 55.26581185,
      toxicityScoreDiff: 3.610101514,
    },
    {
      id: 10,
      partName: "Landing Gear",
      composition: "Composite",
      age: "35",
      condition: "New",
      manufacturer: "Gulfstream",
      useCases: "Art Installations",
      aircraftModel: "E175",
      location: "South America",
      carbonSaved: 871,
      waterSaved: 8284,
      landfillWasteSaved: 178,
      energySaved: 684,
      recyclingRate: 92.21839548,
      newPartCarbonFoot: 924,
      recycledPartCarbonFoot: 53,
      waterUsageNewPart: 8824,
      waterUsageRecycledPart: 540,
      landfillWasteNewPart: 204,
      landfillWasteRecycledPart: 26,
      energyConsumptionNewPart: 819,
      energyConsumptionRecycledPart: 135,
      toxicityNewPart: 7.324839635,
      toxicityRecycledPart: 2.067979896,
      remanufacturingPotential: 0.872330721,
      lifeCycleAssessment: 76.9233714,
      renewableMaterial: 87.16427008,
      toxicityScoreDiff: 5.256859739,
    },
    {
      id: 11,
      partName: "Engine",
      composition: "Titanium",
      age: "45",
      condition: "Used",
      manufacturer: "Bombardier",
      useCases: "Furniture",
      aircraftModel: "A320",
      location: "Europe",
      carbonSaved: 123,
      waterSaved: 1667,
      landfillWasteSaved: 273,
      energySaved: 3256,
      recyclingRate: 82.35858042,
      newPartCarbonFoot: 180,
      recycledPartCarbonFoot: 57,
      waterUsageNewPart: 2278,
      waterUsageRecycledPart: 611,
      landfillWasteNewPart: 396,
      landfillWasteRecycledPart: 123,
      energyConsumptionNewPart: 3426,
      energyConsumptionRecycledPart: 170,
      toxicityNewPart: 5.844389385,
      toxicityRecycledPart: 2.219129655,
      remanufacturingPotential: 0.34739019,
      lifeCycleAssessment: 90.80916235,
      renewableMaterial: 64.20665935,
      toxicityScoreDiff: 3.62525973,
    },
    {
      id: 12,
      partName: "Avionics",
      composition: "Composite",
      age: "12",
      condition: "New",
      manufacturer: "Bombardier",
      useCases: "Aircraft Maintenance",
      aircraftModel: "Citation X",
      location: "Australia",
      carbonSaved: 641,
      waterSaved: 8370,
      landfillWasteSaved: 620,
      energySaved: 4013,
      recyclingRate: 55.10783877,
      newPartCarbonFoot: 754,
      recycledPartCarbonFoot: 113,
      waterUsageNewPart: 8605,
      waterUsageRecycledPart: 235,
      landfillWasteNewPart: 716,
      landfillWasteRecycledPart: 96,
      energyConsumptionNewPart: 4298,
      energyConsumptionRecycledPart: 285,
      toxicityNewPart: 1.297049941,
      toxicityRecycledPart: 1.750949567,
      remanufacturingPotential: 0.160480246,
      lifeCycleAssessment: 25.75336685,
      renewableMaterial: 34.42007584,
      toxicityScoreDiff: -0.453899626,
    },
    {
      id: 13,
      partName: "Landing Gear",
      composition: "Steel",
      age: "32",
      condition: "Used",
      manufacturer: "Boeing",
      useCases: "Automotive Components",
      aircraftModel: "737",
      location: "North America",
      carbonSaved: 807,
      waterSaved: 2961,
      landfillWasteSaved: 597,
      energySaved: 217,
      recyclingRate: 89.54339262,
      newPartCarbonFoot: 967,
      recycledPartCarbonFoot: 160,
      waterUsageNewPart: 3495,
      waterUsageRecycledPart: 534,
      landfillWasteNewPart: 793,
      landfillWasteRecycledPart: 196,
      energyConsumptionNewPart: 510,
      energyConsumptionRecycledPart: 293,
      toxicityNewPart: 7.122123916,
      toxicityRecycledPart: 4.870795043,
      remanufacturingPotential: 0.127398459,
      lifeCycleAssessment: 7.156466628,
      renewableMaterial: 74.49711532,
      toxicityScoreDiff: 2.251328873,
    },
    {
      id: 14,
      partName: "Avionics",
      composition: "Steel",
      age: "34",
      condition: "Used",
      manufacturer: "Cessna",
      useCases: "Automotive Components",
      aircraftModel: "A320",
      location: "Asia",
      carbonSaved: 51,
      waterSaved: 4895,
      landfillWasteSaved: 480,
      energySaved: 3246,
      recyclingRate: 64.60407774,
      newPartCarbonFoot: 139,
      recycledPartCarbonFoot: 88,
      waterUsageNewPart: 5632,
      waterUsageRecycledPart: 737,
      landfillWasteNewPart: 657,
      landfillWasteRecycledPart: 177,
      energyConsumptionNewPart: 3540,
      energyConsumptionRecycledPart: 294,
      toxicityNewPart: 5.982223604,
      toxicityRecycledPart: 4.665787228,
      remanufacturingPotential: 0.077794583,
      lifeCycleAssessment: 38.22148024,
      renewableMaterial: 37.47288433,
      toxicityScoreDiff: 1.316436376,
    },
    {
      id: 15,
      partName: "Avionics",
      composition: "Steel",
      age: "45",
      condition: "Used",
      manufacturer: "Embraer",
      useCases: "Furniture",
      aircraftModel: "A320",
      location: "Asia",
      carbonSaved: 248,
      waterSaved: 1375,
      landfillWasteSaved: 516,
      energySaved: 481,
      recyclingRate: 52.74798731,
      newPartCarbonFoot: 364,
      recycledPartCarbonFoot: 116,
      waterUsageNewPart: 1957,
      waterUsageRecycledPart: 582,
      landfillWasteNewPart: 593,
      landfillWasteRecycledPart: 77,
      energyConsumptionNewPart: 955,
      energyConsumptionRecycledPart: 474,
      toxicityNewPart: 2.924056082,
      toxicityRecycledPart: 4.217764486,
      remanufacturingPotential: 0.407090861,
      lifeCycleAssessment: 30.30973828,
      renewableMaterial: 0.755953443,
      toxicityScoreDiff: -1.293708404,
    },
    {
      id: 16,
      partName: "Landing Gear",
      composition: "Aluminum",
      age: "46",
      condition: "Used",
      manufacturer: "Bombardier",
      useCases: "Building Materials",
      aircraftModel: "G650",
      location: "North America",
      carbonSaved: 291,
      waterSaved: 1185,
      landfillWasteSaved: 485,
      energySaved: 4510,
      recyclingRate: 63.45767192,
      newPartCarbonFoot: 326,
      recycledPartCarbonFoot: 35,
      waterUsageNewPart: 1634,
      waterUsageRecycledPart: 449,
      landfillWasteNewPart: 628,
      landfillWasteRecycledPart: 143,
      energyConsumptionNewPart: 4698,
      energyConsumptionRecycledPart: 188,
      toxicityNewPart: 8.018216152,
      toxicityRecycledPart: 2.628560941,
      remanufacturingPotential: 0.078139997,
      lifeCycleAssessment: 58.06937158,
      renewableMaterial: 64.5459649,
      toxicityScoreDiff: 5.389655211,
    },
    {
      id: 17,
      partName: "Avionics",
      composition: "Steel",
      age: "9",
      condition: "Used",
      manufacturer: "Airbus",
      useCases: "Building Materials",
      aircraftModel: "E175",
      location: "Australia",
      carbonSaved: 688,
      waterSaved: 5333,
      landfillWasteSaved: 378,
      energySaved: 1282,
      recyclingRate: 83.38722578,
      newPartCarbonFoot: 774,
      recycledPartCarbonFoot: 86,
      waterUsageNewPart: 6082,
      waterUsageRecycledPart: 749,
      landfillWasteNewPart: 479,
      landfillWasteRecycledPart: 101,
      energyConsumptionNewPart: 1547,
      energyConsumptionRecycledPart: 265,
      toxicityNewPart: 3.417337762,
      toxicityRecycledPart: 2.994464383,
      remanufacturingPotential: 0.406875042,
      lifeCycleAssessment: 27.41228407,
      renewableMaterial: 87.23288423,
      toxicityScoreDiff: 0.422873379,
    },
    {
      id: 18,
      partName: "Fuselage",
      composition: "Composite",
      age: "3",
      condition: "New",
      manufacturer: "Gulfstream",
      useCases: "Furniture",
      aircraftModel: "Citation X",
      location: "North America",
      carbonSaved: 264,
      waterSaved: 4186,
      landfillWasteSaved: 270,
      energySaved: 4379,
      recyclingRate: 54.71182173,
      newPartCarbonFoot: 426,
      recycledPartCarbonFoot: 162,
      waterUsageNewPart: 4986,
      waterUsageRecycledPart: 800,
      landfillWasteNewPart: 455,
      landfillWasteRecycledPart: 185,
      energyConsumptionNewPart: 4554,
      energyConsumptionRecycledPart: 175,
      toxicityNewPart: 9.020301256,
      toxicityRecycledPart: 1.80597661,
      remanufacturingPotential: 0.638606916,
      lifeCycleAssessment: 67.71843655,
      renewableMaterial: 62.30135196,
      toxicityScoreDiff: 7.214324647,
    },
    {
      id: 19,
      partName: "Engine",
      composition: "Aluminum",
      age: "3",
      condition: "Used",
      manufacturer: "Embraer",
      useCases: "Art Installations",
      aircraftModel: "E175",
      location: "Africa",
      carbonSaved: 440,
      waterSaved: 6965,
      landfillWasteSaved: 769,
      energySaved: 3386,
      recyclingRate: 53.22929187,
      newPartCarbonFoot: 601,
      recycledPartCarbonFoot: 161,
      waterUsageNewPart: 7911,
      waterUsageRecycledPart: 946,
      landfillWasteNewPart: 850,
      landfillWasteRecycledPart: 81,
      energyConsumptionNewPart: 3748,
      energyConsumptionRecycledPart: 362,
      toxicityNewPart: 3.624706808,
      toxicityRecycledPart: 2.295193766,
      remanufacturingPotential: 0.01700167,
      lifeCycleAssessment: 86.85907181,
      renewableMaterial: 54.46832589,
      toxicityScoreDiff: 1.329513042,
    },
    {
      id: 20,
      partName: "Wing",
      composition: "Titanium",
      age: "22",
      condition: "New",
      manufacturer: "Embraer",
      useCases: "Art Installations",
      aircraftModel: "G650",
      location: "Africa",
      carbonSaved: 676,
      waterSaved: 1625,
      landfillWasteSaved: 293,
      energySaved: 516,
      recyclingRate: 73.61333701,
      newPartCarbonFoot: 804,
      recycledPartCarbonFoot: 128,
      waterUsageNewPart: 1874,
      waterUsageRecycledPart: 249,
      landfillWasteNewPart: 353,
      landfillWasteRecycledPart: 60,
      energyConsumptionNewPart: 744,
      energyConsumptionRecycledPart: 228,
      toxicityNewPart: 1.858057717,
      toxicityRecycledPart: 3.471148476,
      remanufacturingPotential: 0.973670334,
      lifeCycleAssessment: 36.20640958,
      renewableMaterial: 2.026473203,
      toxicityScoreDiff: -1.613090759,
    },
    {
      id: 21,
      partName: "Avionics",
      composition: "Steel",
      age: "49",
      condition: "Used",
      manufacturer: "Embraer",
      useCases: "Aircraft Maintenance",
      aircraftModel: "A320",
      location: "North America",
      carbonSaved: 331,
      waterSaved: 3813,
      landfillWasteSaved: 381,
      energySaved: 2156,
      recyclingRate: 74.89860857,
      newPartCarbonFoot: 360,
      recycledPartCarbonFoot: 29,
      waterUsageNewPart: 4372,
      waterUsageRecycledPart: 559,
      landfillWasteNewPart: 564,
      landfillWasteRecycledPart: 183,
      energyConsumptionNewPart: 2457,
      energyConsumptionRecycledPart: 301,
      toxicityNewPart: 7.613608083,
      toxicityRecycledPart: 2.684587872,
      remanufacturingPotential: 0.516137471,
      lifeCycleAssessment: 46.40037309,
      renewableMaterial: 23.48053916,
      toxicityScoreDiff: 4.929020212,
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
                          <p className="text-green-500 hover:text-green-700">
                            {item.condition}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p className="text-red-500 hover:text-red-700">
                            {item.location}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p className="text-red-500 hover:text-red-700">
                            {item.manufacturer}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                          <p className="text-red-500 hover:text-red-700">
                            {item.aircraftModel}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap p-2 ">
                          <button
                            className="p-4 my-2 rounded-[10px] bg-green-500 text-white button-effect   w-auto h-auto"
                            onClick={() => {
                              navigate("/partInfo", { state: item });
                              console.log(item.id);
                            }}
                          >
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
