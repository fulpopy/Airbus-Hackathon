package com.aerothon.aircraftservice.service;

import com.aerothon.aircraftservice.constants.ServiceConstants;
import com.aerothon.aircraftservice.model.AircraftContent;
import com.aerothon.aircraftservice.model.AnalyticsResponse;
import com.aerothon.aircraftservice.model.entity.AircraftPartsDataEntity;
import com.aerothon.aircraftservice.repository.AircraftPartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.*;

@Service
public class AnalyticsService {

    @Autowired
    AircraftPartsRepository aircraftPartsRepository;

    @Autowired
    EntityManager entityManager;

//    public List<AircraftPartsDataEntity> getDetailsForAirlinesImpl(Map<String, String> searchParametersMap){
        public AnalyticsResponse getDetailsForAirlinesImplBasedOnCriteria(Map<String, String> searchParametersMap){

            CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<AircraftPartsDataEntity> criteriaQuery = criteriaBuilder.createQuery(AircraftPartsDataEntity.class);
        Root<AircraftPartsDataEntity> root = criteriaQuery.from(AircraftPartsDataEntity.class);
        Predicate predicate = criteriaBuilder.conjunction();

        if (searchParametersMap.containsKey(ServiceConstants.partName)
                && !ObjectUtils.isEmpty(searchParametersMap.get(ServiceConstants.partName))){
            predicate = criteriaBuilder.and(predicate, (criteriaBuilder.like(root.get(ServiceConstants.partName),
                    "%" + searchParametersMap.get(ServiceConstants.partName) + "%")));
        }
        if (searchParametersMap.containsKey(ServiceConstants.COMPOSITION)
                && !ObjectUtils.isEmpty(searchParametersMap.get(ServiceConstants.COMPOSITION))){
            predicate = criteriaBuilder.and(predicate, (criteriaBuilder.like(root.get(ServiceConstants.COMPOSITION),
                    "%" + searchParametersMap.get(ServiceConstants.COMPOSITION) + "%")));
        }
        if (searchParametersMap.containsKey(ServiceConstants.CONDITION)
                    && !ObjectUtils.isEmpty(searchParametersMap.get(ServiceConstants.CONDITION))){
                predicate = criteriaBuilder.and(predicate, (criteriaBuilder.like(root.get(ServiceConstants.CONDITION),
                        "%" + searchParametersMap.get(ServiceConstants.CONDITION) + "%")));
            }


            AnalyticsResponse analyticsResponse = new AnalyticsResponse();
        if (!ObjectUtils.isEmpty(predicate)) {
            criteriaQuery.where(predicate).distinct(true);
            TypedQuery<AircraftPartsDataEntity> queryToFetchTotalSize = entityManager.createQuery(criteriaQuery);
            int totalResult = queryToFetchTotalSize.getResultList().size();
            int page = Integer.parseInt(searchParametersMap.get("page"));
            int size = Integer.parseInt(searchParametersMap.get("size"));
            TypedQuery<AircraftPartsDataEntity> queryToFetchPaginatedAircraftDetails = entityManager
                    .createQuery(criteriaQuery);
            queryToFetchPaginatedAircraftDetails.setFirstResult(page * size);
            queryToFetchPaginatedAircraftDetails.setMaxResults(size);
            analyticsResponse.setTotalElements(totalResult);


            int totalpages = 0;

            if (size != 0) {
                double pagecount = totalResult * 1.0 / size;
                totalpages = (int) Math.ceil(pagecount);
                analyticsResponse.setTotalPage(totalpages);
            }
            List<AircraftPartsDataEntity> aircraftDetailsWithDuplicateEntries = queryToFetchPaginatedAircraftDetails
                    .getResultList();
            List<AircraftPartsDataEntity> aircraftDetails = new ArrayList<>(
                    new HashSet<>(aircraftDetailsWithDuplicateEntries));
            List<AircraftContent> aircraftContents = new ArrayList<>();

            if (!CollectionUtils.isEmpty(aircraftDetails)) {
                for (AircraftPartsDataEntity aircraftDetail : aircraftDetails) {
                    AircraftContent aircraftContent = new AircraftContent();
                    aircraftContent.setId(aircraftDetail.getId());
                    aircraftContent.setPartName(aircraftDetail.getPartName());
                    aircraftContent.setAge(aircraftDetail.getAge());
                    aircraftContent.setComposition(aircraftDetail.getComposition());
                    aircraftContent.setCondition(aircraftDetail.getCondition());
                    aircraftContent.setManufacturer(aircraftDetail.getManufacturer());
                    aircraftContent.setUseCases(aircraftDetail.getUseCases());
                    aircraftContent.setAircraftModel(aircraftDetail.getAircraftModel());
                    aircraftContent.setLocation(aircraftDetail.getLocation());
                    aircraftContent.setCarbonSaved(aircraftDetail.getCarbonSaved());
                    aircraftContent.setWaterSaved(aircraftDetail.getWaterSaved());
                    aircraftContent.setLandfillWasteSaved(aircraftDetail.getLandfillWasteSaved());
                    aircraftContent.setEnergySaved(aircraftDetail.getEnergySaved());
                    aircraftContent.setRecyclingRate(aircraftDetail.getRecyclingRate());
                    aircraftContent.setNewPartCarbonFoot(aircraftDetail.getNewPartCarbonFoot());
                    aircraftContent.setRecycledPartCarbonFoot(aircraftDetail.getRecycledPartCarbonFoot());
                    aircraftContent.setWaterUsageNewPart(aircraftDetail.getWaterUsageNewPart());
                    aircraftContent.setWaterUsageRecycledPart(aircraftDetail.getWaterUsageRecycledPart());
                    aircraftContent.setLandfillWasteNewPart(aircraftDetail.getLandfillWasteNewPart());
                    aircraftContent.setLandfillWasteRecycledPart(aircraftDetail.getLandfillWasteRecycledPart());
                    aircraftContent.setEnergyConsumptionNewPart(aircraftDetail.getEnergyConsumptionNewPart());
                    aircraftContent.setEnergyConsumptionRecycledPart(aircraftDetail.getEnergyConsumptionRecycledPart());
                    aircraftContent.setToxicityNewPart(aircraftDetail.getToxicityNewPart());
                    aircraftContent.setToxicityNewPart(aircraftDetail.getToxicityNewPart());
                    aircraftContent.setToxicityScoreDiff(aircraftDetail.getToxicityScoreDiff());
                    aircraftContent.setRemanufacturingPotential(aircraftDetail.getRemanufacturingPotential());
                    aircraftContent.setLifeCycleAssessment(aircraftDetail.getLifeCycleAssessment());
                    aircraftContent.setRenewableMaterial(aircraftDetail.getRenewableMaterial());

                    aircraftContents.add(aircraftContent);
                }
            }
            analyticsResponse.setTerminalContent(aircraftContents);
            if (page == totalpages - 1) {
                analyticsResponse.setLastPage(true);
            }

            analyticsResponse.setCurrentPage(page);

        }
        return analyticsResponse;





//
//                    boolean lastPage = false;
//        int page = Integer.parseInt(searchParametersMap.get("page"));
//        int size = Integer.parseInt(searchParametersMap.get("size"));
//        Pageable pageable = PageRequest.of(page, size);
//        List<AircraftPartsDataEntity> airlineDetailsList = new ArrayList<>();
//        Page<Object[]> airlineDetailsObject = aircraftPartsRepository.findDetailsForAirlines(pageable);
//        if(!ObjectUtils.isEmpty(airlineDetailsObject)){
//            for (Object[] detail : airlineDetailsObject) {
//                AircraftPartsDataEntity airlineDetails = new AircraftPartsDataEntity();
//                airlineDetails.setId((Integer) detail[0]);
//                airlineDetails.setPartName((String) detail[1]);
//                airlineDetails.setComposition((String) detail[2]);
//                airlineDetails.setAge((String) detail[3]);
//                airlineDetails.setCondition((String) detail[4]);
//                airlineDetails.setManufacturer((String) detail[5]);
//                airlineDetails.setUseCases((String) detail[6]);
//                airlineDetails.setAircraftModel((String) detail[7]);
//                airlineDetails.setCarbonSaved((Integer)detail[8]);
//                airlineDetails.setWaterSaved((Integer)detail[9]);
//                airlineDetails.setLandfillWasteSaved((Integer)detail[10]);
//                airlineDetails.setEnergySaved((Integer)detail[11]);
//                airlineDetails.setLocation((String)detail[12]);
//                airlineDetails.setRecyclingRate((Double)detail[13]);
//
//                airlineDetails.setNewPartCarbonFoot((Integer)detail[14]);
//                airlineDetails.setRecycledPartCarbonFoot((Integer)detail[15]);
//                airlineDetails.setWaterUsageNewPart((Integer)detail[16]);
//                airlineDetails.setWaterUsageRecycledPart((Integer)detail[17]);
//                airlineDetails.setLandfillWasteNewPart((Integer)detail[18]);
//                airlineDetails.setLandfillWasteRecycledPart((Integer)detail[19]);
//                airlineDetails.setEnergyConsumptionNewPart((Integer)detail[20]);
//                airlineDetails.setEnergyConsumptionRecycledPart((Integer)detail[21]);
//                airlineDetails.setToxicityNewPart((Double)detail[22]);
//                airlineDetails.setToxicityRecycledPart((Double)detail[23]);
//                airlineDetails.setRemanufacturingPotential((Double)detail[24]);
//                airlineDetails.setLifeCycleAssessment((Double)detail[25]);
//                airlineDetails.setRenewableMaterial((Double)detail[26]);
//                airlineDetails.setToxicityScoreDiff((Double)detail[27]);
//
//
//
//
//
//                airlineDetailsList.add(airlineDetails);
//            }
//            if (airlineDetailsObject.getTotalPages() - 1 == page) {
//                lastPage = true;
//            }
//        }
//        return airlineDetailsList ;

    }

    public  Map<String, Integer> getCompositionDetailsImpl(){
        List<String> componentsList = new ArrayList<>(ServiceConstants.componentList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<componentsList.size();i++){
            int count = aircraftPartsRepository.findCountOfComponent(componentsList.get(i));
            map.put(componentsList.get(i),count);
        }
    return map;
    }

    public Map<String,Integer> getCarbonFootDetailsImpl(){
        List<String> partNameList = new ArrayList<>(ServiceConstants.partNameList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<partNameList.size();i++){
            int count = aircraftPartsRepository.findAvgCarbonFootOfComponent(partNameList.get(i));
            map.put(partNameList.get(i),count);
        }
        return map;
    }

    public Map<String, Integer> getWaterUsageDetailsImpl() {
        List<String> partNameList = new ArrayList<>(ServiceConstants.partNameList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<partNameList.size();i++){
            int count = aircraftPartsRepository.findAvgWaterSavedOfComponent(partNameList.get(i));
            map.put(partNameList.get(i),count);
        }
        return map;
    }

    public Map<String, Integer> getLandfillWasteDetailsImpl() {
        List<String> partNameList = new ArrayList<>(ServiceConstants.partNameList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<partNameList.size();i++){
            int count = aircraftPartsRepository.findAvgLandFillWasteSavedOfComponent(partNameList.get(i));
            map.put(partNameList.get(i),count);
        }
        return map;
    }

    public Map<String, Integer> getEnergyUsageDetailsImpl() {
        List<String> partNameList = new ArrayList<>(ServiceConstants.partNameList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<partNameList.size();i++){
            int count = aircraftPartsRepository.findAvgEnergySavedOfComponent(partNameList.get(i));
            map.put(partNameList.get(i),count);
        }
        return map;
    }

    public Map<String, Integer> getAvgRecyclingRateImpl() {
        List<String> partNameList = new ArrayList<>(ServiceConstants.partNameList);
        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<partNameList.size();i++){
            int count = aircraftPartsRepository.findAvgRecyclingRateOfComponent(partNameList.get(i));
            map.put(partNameList.get(i),count);
        }
        return map;
    }

    public List<AircraftPartsDataEntity> getAllDetailsImpl(Integer page, Integer size) {
        boolean lastPage = false;

        Pageable pageable = PageRequest.of(page, size);
        List<AircraftPartsDataEntity> airlineDetailsList = new ArrayList<>();
        Page<Object[]> airlineDetailsObject = aircraftPartsRepository.findDetailsForAirlines(pageable);
        if(!ObjectUtils.isEmpty(airlineDetailsObject)){
            for (Object[] detail : airlineDetailsObject) {
                AircraftPartsDataEntity airlineDetails = new AircraftPartsDataEntity();
                airlineDetails.setId((Integer) detail[0]);
                airlineDetails.setPartName((String) detail[1]);
                airlineDetails.setComposition((String) detail[2]);
                airlineDetails.setAge((String) detail[3]);
                airlineDetails.setCondition((String) detail[4]);
                airlineDetails.setManufacturer((String) detail[5]);
                airlineDetails.setUseCases((String) detail[6]);
                airlineDetails.setAircraftModel((String) detail[7]);
                airlineDetails.setCarbonSaved((Integer)detail[8]);
                airlineDetails.setWaterSaved((Integer)detail[9]);
                airlineDetails.setLandfillWasteSaved((Integer)detail[10]);
                airlineDetails.setEnergySaved((Integer)detail[11]);
                airlineDetails.setLocation((String)detail[12]);
                airlineDetails.setRecyclingRate((Double)detail[13]);

                airlineDetails.setNewPartCarbonFoot((Integer)detail[14]);
                airlineDetails.setRecycledPartCarbonFoot((Integer)detail[15]);
                airlineDetails.setWaterUsageNewPart((Integer)detail[16]);
                airlineDetails.setWaterUsageRecycledPart((Integer)detail[17]);
                airlineDetails.setLandfillWasteNewPart((Integer)detail[18]);
                airlineDetails.setLandfillWasteRecycledPart((Integer)detail[19]);
                airlineDetails.setEnergyConsumptionNewPart((Integer)detail[20]);
                airlineDetails.setEnergyConsumptionRecycledPart((Integer)detail[21]);
                airlineDetails.setToxicityNewPart((Double)detail[22]);
                airlineDetails.setToxicityRecycledPart((Double)detail[23]);
                airlineDetails.setRemanufacturingPotential((Double)detail[24]);
                airlineDetails.setLifeCycleAssessment((Double)detail[25]);
                airlineDetails.setRenewableMaterial((Double)detail[26]);
                airlineDetails.setToxicityScoreDiff((Double)detail[27]);

                airlineDetailsList.add(airlineDetails);
            }
            if (airlineDetailsObject.getTotalPages() - 1 == page) {
                lastPage = true;
            }
        }
        return airlineDetailsList ;
    }
}
