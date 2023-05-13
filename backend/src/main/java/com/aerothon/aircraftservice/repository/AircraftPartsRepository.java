package com.aerothon.aircraftservice.repository;

import com.aerothon.aircraftservice.model.entity.AircraftPartsDataEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

public interface AircraftPartsRepository  extends JpaRepository<AircraftPartsDataEntity,Integer> {

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select apd.id, apd.partName, apd.composition,apd.age,apd.condition,apd.manufacturer,apd.useCases,apd.aircraftModel,apd.carbonSaved,apd.waterSaved,apd.landfillWasteSaved,apd.energySaved,apd.location,apd.recyclingRate," +
            "apd.newPartCarbonFoot,apd.recycledPartCarbonFoot,apd.waterUsageNewPart,apd.waterUsageRecycledPart,apd.landfillWasteNewPart," +
            "apd.landfillWasteRecycledPart,apd.energyConsumptionNewPart,apd.energyConsumptionRecycledPart" +
            ",apd.toxicityNewPart,apd.toxicityRecycledPart,apd.remanufacturingPotential,apd.lifeCycleAssessment," +
            " apd.renewableMaterial,apd.toxicityScoreDiff from aircraft_parts_data apd")
    Page<Object[]> findDetailsForAirlines(Pageable pageable);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select count(apd.composition) from aircraft_parts_data apd where apd.composition= :component")
    int findCountOfComponent(String component);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select avg(apd.carbonSaved) from aircraft_parts_data apd where apd.partName= :component")
    int findAvgCarbonFootOfComponent(String component);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select avg(apd.waterSaved) from aircraft_parts_data apd where apd.partName= :component")
    int findAvgWaterSavedOfComponent(String component);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select avg(apd.landfillWasteSaved) from aircraft_parts_data apd where apd.partName= :component")
    int findAvgLandFillWasteSavedOfComponent(String component);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select avg(apd.energySaved) from aircraft_parts_data apd where apd.partName= :component")
    int findAvgEnergySavedOfComponent(String component);

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    @Query("select avg(apd.recyclingRate) from aircraft_parts_data apd where apd.partName= :component")
    int findAvgRecyclingRateOfComponent(String component);






}
