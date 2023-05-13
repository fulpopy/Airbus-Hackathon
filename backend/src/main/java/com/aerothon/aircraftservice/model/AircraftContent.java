package com.aerothon.aircraftservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AircraftContent {
    private int id;
    private String partName;

    private String composition;
    private String age;
    private String condition;
    private String manufacturer;
    private String useCases;
    private String aircraftModel;

    private int carbonSaved;
    private int waterSaved;
    private int landfillWasteSaved;
    private int energySaved;
    private String location;
    private double recyclingRate;

    private int newPartCarbonFoot;
    private int recycledPartCarbonFoot;
    private int waterUsageNewPart;
    private int waterUsageRecycledPart;
    private int landfillWasteNewPart;
    private int landfillWasteRecycledPart;
    private int energyConsumptionNewPart;
    private int energyConsumptionRecycledPart;

    private double toxicityNewPart;
    private double toxicityRecycledPart;
    private double remanufacturingPotential;
    private double lifeCycleAssessment;
    private double renewableMaterial;
    private double toxicityScoreDiff;

}
