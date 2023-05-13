package com.aerothon.aircraftservice.controller;

import com.aerothon.aircraftservice.model.AnalyticsResponse;
import com.aerothon.aircraftservice.model.entity.AircraftPartsDataEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/aircraft-part-management")
@EnableTransactionManagement
public interface IAnalyticsController {

    @GetMapping("/details/airparts")
    ResponseEntity<AnalyticsResponse> getDetailsForAirlines(@RequestBody Map<String, String> searchParametersMap) throws Exception;

    @GetMapping("/analytics/composition")
    ResponseEntity<Map<String, Integer>> getCompositionDetails() throws Exception;

    @GetMapping("/analytics")
    ResponseEntity<Map<String, Integer>> getCarbonFootDetails(@RequestParam String typeSaved) throws Exception;

    @GetMapping("/analytics/recycling-rate")
    ResponseEntity<Map<String, Integer>> getAvgRecyclingRate() throws Exception;

    @GetMapping("/details/all")
    ResponseEntity<List<AircraftPartsDataEntity>> getAllDetails(@RequestParam(name = "page") Integer page, @RequestParam(name = "size") Integer size) throws Exception;

}
