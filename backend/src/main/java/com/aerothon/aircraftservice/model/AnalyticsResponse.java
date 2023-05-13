package com.aerothon.aircraftservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class AnalyticsResponse {
    private boolean lastPage;
    private List<AircraftContent> terminalContent;
    private Integer currentPage;
    private Integer totalPage;
    private long totalElements;
}
