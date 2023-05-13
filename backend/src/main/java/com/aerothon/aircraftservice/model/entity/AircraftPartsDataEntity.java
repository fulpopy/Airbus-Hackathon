package com.aerothon.aircraftservice.model.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Component
@Entity(name="aircraft_parts_data")
public class AircraftPartsDataEntity {


    @Id
    @Column(name="ID")
    private int id;
    @Column(name="Part_Name")
    private String partName;

    @Column(name="Material_Composition")
    private String composition;
    @Column(name="Age_years")
    private String age;
    @Column(name="Condition")
    private String condition;
    @Column(name="Manufacturer")
    private String manufacturer;
    @Column(name="Potential_Use_Cases")
    private String useCases;
    @Column(name="Aircraft_Model")
    private String aircraftModel;
    @Column(name="Location")
    private String location;
    @Column(name="Carbon_Footprint_Saved_kg_CO2e")
    private int carbonSaved;
    @Column(name="Water_Usage_Saved_liters")
    private int waterSaved;
    @Column(name="Landfill_Waste_Saved_kg")
    private int landfillWasteSaved;
    @Column(name="Energy_Consumption_saved_kwh")
    private int energySaved;
    @Column(name="Recycling_Rate")
    private double recyclingRate;

    @Column(name="New_Parts_Carbon_Footprint_kg_CO2e")
    private int newPartCarbonFoot;
    @Column(name="Recycled_Parts_Carbon_Footprint_kg_CO2e")
    private int recycledPartCarbonFoot;
    @Column(name="Water_Usage_New_Parts_liters")
    private int waterUsageNewPart;
    @Column(name="Water_Usage_Recycled_Parts_liters")
    private int waterUsageRecycledPart;
    @Column(name="Landfill_Waste_New_Parts_kg")
    private int landfillWasteNewPart;
    @Column(name="Landfill_Waste_Recycled_Parts_kg")
    private int landfillWasteRecycledPart;
    @Column(name="Energy_Consumption_New_Parts_kwh")
    private int energyConsumptionNewPart;
    @Column(name="Energy_Consumption_Recycled_Parts_kwh")
    private int energyConsumptionRecycledPart;

    @Column(name="Toxicity_Score_New_Parts")
    private double toxicityNewPart;
    @Column(name="Toxicity_Score_Recycled_Parts")
    private double toxicityRecycledPart;
    @Column(name="Remanufacturing_Potential")
    private double remanufacturingPotential;
    @Column(name="Life_Cycle_Assessment")
    private double lifeCycleAssessment;
    @Column(name="Renewable_Material_Content")
    private double renewableMaterial;
    @Column(name="Toxicity_Score_Difference")
    private double toxicityScoreDiff;




}
