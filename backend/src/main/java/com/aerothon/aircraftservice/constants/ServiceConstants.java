package com.aerothon.aircraftservice.constants;

import lombok.Data;

import java.util.Arrays;
import java.util.List;

@Data
public class ServiceConstants {
     public static final String[] COMPONENTS  = { "Aluminum","Composite","Steel","Titanium"};
     public static final String[] PART_NAME = {"Landing Gear","Avionics","Wing","Fuselage","Engine"};
     public static final List<String> componentList = Arrays.asList(COMPONENTS);
     public static final List<String> partNameList = Arrays.asList(PART_NAME);
     public static final String partName = "partName";
     public static final String LOCATION = "location";
     public static final String COMPOSITION = "composition";
     public static final String CONDITION = "condition";
     public static final String MANUFACTURER = "manufacturer";



}
