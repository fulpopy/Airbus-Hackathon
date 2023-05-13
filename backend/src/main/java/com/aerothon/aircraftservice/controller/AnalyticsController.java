package com.aerothon.aircraftservice.controller;

import com.aerothon.aircraftservice.model.AnalyticsResponse;
import com.aerothon.aircraftservice.model.entity.AircraftPartsDataEntity;
import com.aerothon.aircraftservice.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnalyticsController implements IAnalyticsController{

    @Autowired
    AnalyticsService analyticsService;

    @Override
    public ResponseEntity<AnalyticsResponse> getDetailsForAirlines(Map<String, String> searchParametersMap) throws Exception {
        AnalyticsResponse responseList = analyticsService.getDetailsForAirlinesImplBasedOnCriteria(searchParametersMap);
        return new ResponseEntity<>(responseList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Map<String, Integer>> getCompositionDetails() throws Exception {
        Map<String, Integer> materialComposition = analyticsService.getCompositionDetailsImpl();
        return new ResponseEntity<>(materialComposition, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Map<String, Integer>> getCarbonFootDetails(String typeSaved) throws Exception {
        Map<String, Integer> map = new HashMap<>();

        if(typeSaved.equalsIgnoreCase("carbon-foot-saved")){
             map = analyticsService.getCarbonFootDetailsImpl();
        } else if (typeSaved.equalsIgnoreCase("water-usage-saved")) {
            map = analyticsService.getWaterUsageDetailsImpl();
        }
        else if (typeSaved.equalsIgnoreCase("landfill-waste-saved")) {
            map = analyticsService.getLandfillWasteDetailsImpl();
        }
        else if (typeSaved.equalsIgnoreCase("energy-saved")) {
            map = analyticsService.getEnergyUsageDetailsImpl();
        }
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Map<String, Integer>> getAvgRecyclingRate() throws Exception {
        Map<String, Integer> recyclingRate = analyticsService.getAvgRecyclingRateImpl();
        return new ResponseEntity<>(recyclingRate, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<AircraftPartsDataEntity>> getAllDetails(Integer page, Integer size) throws Exception {
        List<AircraftPartsDataEntity> aircraftPartsDataEntityList = analyticsService.getAllDetailsImpl(page,size);
        return new ResponseEntity<>(aircraftPartsDataEntityList, HttpStatus.OK);

    }

}
