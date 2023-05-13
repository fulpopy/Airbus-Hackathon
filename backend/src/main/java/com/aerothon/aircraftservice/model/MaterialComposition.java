package com.aerothon.aircraftservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MaterialComposition {

    private String Aluminum;
    private String Composite;
    private String Steel;
    private String Titanium;
}
