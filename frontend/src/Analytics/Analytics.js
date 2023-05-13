import React from "react";
import BarGraph from "./BarGraph";
import { Card, Typography } from "@material-ui/core";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./styles.css";
const newPartCarbonFoot = [735.5, 932, 754, 426, 804];
const recycledPartCarbonFoot = [150.5, 43.5, 113, 162, 128];
const waterUsageNewPart = [7516, 8192, 8605, 4986, 1874];
const waterUsageRecycledPart = [344, 575.5, 235, 800, 249];
const landfillWasteNewPart = [513, 225, 716, 455, 353];
const landfillWasteRecycledPart = [132.5, 59.5, 96, 185, 60];
const energyConsumptionNewPart = [2409.5, 1909.5, 4298, 4554, 744];
const energyConsumptionRecycledPart = [117.5, 276, 285, 175, 228];
const units = [
  "Average Corbon Footprint(kg CO2e)",
  "Average Water Saved(liters)",
  "Avg Landfill Waste(kg)",
  "Avg Energy Consumption(kWh)",
];
const Analytics = () => {
  return (
    <div>
      <Typography variant="h3" component="h5">
        ANALYTICS
      </Typography>
      <div className="grid">
        <div className="grid-item">
          <Card>
            <BarGraph
              d1={newPartCarbonFoot}
              d2={recycledPartCarbonFoot}
              unit={units[0]}
            />
          </Card>
          <Typography variant="h5" component="h5">
            Carbon Footprint
          </Typography>
        </div>
        <div className="grid-item">
          <Card>
            <BarGraph
              d1={waterUsageNewPart}
              d2={waterUsageRecycledPart}
              unit={units[1]}
            />
          </Card>
          <Typography variant="h5" component="h5">
            Water Usage
          </Typography>
        </div>
        <div className="grid-item">
          <Card>
            <BarGraph
              d1={landfillWasteNewPart}
              d2={landfillWasteRecycledPart}
              unit={units[2]}
            />
          </Card>
          <Typography variant="h5" component="h5">
            Landfill Waste
          </Typography>
        </div>
        <div className="grid-item">
          <Card>
            <BarGraph
              d1={energyConsumptionNewPart}
              d2={energyConsumptionRecycledPart}
              unit={units[3]}
            />
          </Card>
          <Typography variant="h5" component="h5">
            Energy Consumption
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
