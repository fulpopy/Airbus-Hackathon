import React from "react";
import { useLocation } from "react-router-dom";
import MoreInfoBarGraph from "./MoreInfoBarGraph.jsx";
const PartInfo = () => {
  const { state } = useLocation();
  const waterSavedInfo = {
    waterUsageNewPart: state.waterUsageNewPart,
    waterUsageRecycledPart: state.waterUsageRecycledPart,
  };
  const EnergyConsumptionInfo = {
    energyConsumptionNewPart: state.energyConsumptionNewPart,
    energyConsumptionRecycledPart: state.energyConsumptionRecycledPart,
  };
  const LandfillWasteInfo = {
    landfillWasteNewPart: state.landfillWasteNewPart,
    landfillWasteRecycledPart: state.landfillWasteRecycledPart,
  };
  console.log(state);
  return (
    <div className="p-4 flex flex-col">
      <div className="text-[20px] font-bold text-black">
        <h1>Complete Economic Information for the Parts : </h1>
      </div>
      <div className="flex w-[100%] justify-between">
        <div className="flex flex-col p-2 bg-gray-200 rounded-[5px] m-2 w-1/5 item-center">
          <h1 className="text-[14px] font-medium ">Part Name</h1>
          <span className="text-green-500">{state.partName}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-200 rounded-[5px] m-2 w-1/5 item-center">
          <h1 className="text-[14px] font-medium ">Composition</h1>
          <span className="text-green-500">{state.composition}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-200 rounded-[5px] m-2 w-1/5 item-center">
          <h1 className="text-[14px] font-medium ">Location</h1>
          <span className="text-green-500">{state.location}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-200 rounded-[5px] m-2 w-1/5 item-center">
          <h1 className="text-[14px] font-medium ">Manufactirere</h1>
          <span className="text-green-500">{state.manufacturer}</span>
        </div>
        <div className="flex flex-col p-2 bg-gray-200 rounded-[5px] m-2 w-1/5 item-center">
          <h1 className="text-[14px] font-medium ">Condition</h1>
          <span className="text-green-500">{state.condition}</span>
        </div>
      </div>
      <div className="flex w-[100%] my-6">
        <div className="w-1/3 mx-2">
          <MoreInfoBarGraph d1={waterSavedInfo} y="litres" />
        </div>
        <div className="w-1/3 mx-2">
          <MoreInfoBarGraph d1={EnergyConsumptionInfo} y="Kwh" />
        </div>
        <div className="w-1/3 mx-2">
          <MoreInfoBarGraph d1={LandfillWasteInfo} y="Kg" />
        </div>
      </div>
    </div>
  );
};

export default PartInfo;
