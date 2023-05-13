package com.aerothon.aircraftservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AirlineDetails {

    private int id;
    private String partName;
    private String composition;
    private String age;
    private String condition;
    private String manufacturer;
    private String useCases;
    private String aircraftModel;

}
